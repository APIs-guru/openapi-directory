import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3Form } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3FormInput } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";



// GoogleCloudDialogflowCxV3Page
/** 
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export class GoogleCloudDialogflowCxV3Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entryFulfillment" })
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;

  @SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandler })
  eventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: GoogleCloudDialogflowCxV3Form;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}


// GoogleCloudDialogflowCxV3PageInput
/** 
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export class GoogleCloudDialogflowCxV3PageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entryFulfillment" })
  entryFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;

  @SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandlerInput })
  eventHandlers?: GoogleCloudDialogflowCxV3EventHandlerInput[];

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: GoogleCloudDialogflowCxV3FormInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRouteInput })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}
