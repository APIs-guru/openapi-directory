import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export declare class GoogleCloudDialogflowCxV3beta1Flow extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[];
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export declare class GoogleCloudDialogflowCxV3beta1FlowInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandlerInput[];
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
    transitionRouteGroups?: string[];
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRouteInput[];
}
