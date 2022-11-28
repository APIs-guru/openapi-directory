import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1FormInput } from "./googleclouddialogflowcxv3beta1form";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1Form } from "./googleclouddialogflowcxv3beta1form";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
/**
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export declare class GoogleCloudDialogflowCxV3beta1PageInput extends SpeakeasyBase {
    displayName?: string;
    entryFulfillment?: GoogleCloudDialogflowCxV3beta1FulfillmentInput;
    eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandlerInput[];
    form?: GoogleCloudDialogflowCxV3beta1FormInput;
    name?: string;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRouteInput[];
}
/**
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
export declare class GoogleCloudDialogflowCxV3beta1Page extends SpeakeasyBase {
    displayName?: string;
    entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
    eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[];
    form?: GoogleCloudDialogflowCxV3beta1Form;
    name?: string;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}
