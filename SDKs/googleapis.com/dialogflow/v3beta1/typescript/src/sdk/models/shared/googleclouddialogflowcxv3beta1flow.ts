import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";



// GoogleCloudDialogflowCxV3beta1Flow
/** 
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export class GoogleCloudDialogflowCxV3beta1Flow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandler })
  eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}


// GoogleCloudDialogflowCxV3beta1FlowInput
/** 
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export class GoogleCloudDialogflowCxV3beta1FlowInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandlerInput })
  eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandlerInput[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteInput })
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRouteInput[];
}
