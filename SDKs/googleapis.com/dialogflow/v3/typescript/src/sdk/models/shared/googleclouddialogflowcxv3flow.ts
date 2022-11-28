import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3NluSettings } from "./googleclouddialogflowcxv3nlusettings";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";



// GoogleCloudDialogflowCxV3FlowInput
/** 
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export class GoogleCloudDialogflowCxV3FlowInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandlerInput })
  eventHandlers?: GoogleCloudDialogflowCxV3EventHandlerInput[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRouteInput })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}


// GoogleCloudDialogflowCxV3Flow
/** 
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
export class GoogleCloudDialogflowCxV3Flow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandler })
  eventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluSettings" })
  nluSettings?: GoogleCloudDialogflowCxV3NluSettings;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" })
  transitionRouteGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
