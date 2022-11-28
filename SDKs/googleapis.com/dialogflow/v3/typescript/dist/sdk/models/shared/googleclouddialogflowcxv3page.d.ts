import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3Form } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3FormInput } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
/**
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export declare class GoogleCloudDialogflowCxV3Page extends SpeakeasyBase {
    displayName?: string;
    entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
    eventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];
    form?: GoogleCloudDialogflowCxV3Form;
    name?: string;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
/**
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export declare class GoogleCloudDialogflowCxV3PageInput extends SpeakeasyBase {
    displayName?: string;
    entryFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;
    eventHandlers?: GoogleCloudDialogflowCxV3EventHandlerInput[];
    form?: GoogleCloudDialogflowCxV3FormInput;
    name?: string;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}
