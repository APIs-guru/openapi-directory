import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3NluSettings } from "./googleclouddialogflowcxv3nlusettings";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export declare class GoogleCloudDialogflowCxV3FlowInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    eventHandlers?: GoogleCloudDialogflowCxV3EventHandlerInput[];
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export declare class GoogleCloudDialogflowCxV3Flow extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    eventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
