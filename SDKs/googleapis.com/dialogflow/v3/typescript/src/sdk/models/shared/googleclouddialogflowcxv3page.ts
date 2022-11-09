import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3Form } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";


// GoogleCloudDialogflowCxV3Page
/** 
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export class GoogleCloudDialogflowCxV3Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entryFulfillment" })
  entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;

  @Metadata({ data: "json, name=eventHandlers", elemType: shared.GoogleCloudDialogflowCxV3EventHandler })
  eventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];

  @Metadata({ data: "json, name=form" })
  form?: GoogleCloudDialogflowCxV3Form;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @Metadata({ data: "json, name=transitionRoutes", elemType: shared.GoogleCloudDialogflowCxV3TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
