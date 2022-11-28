package shared

// GoogleCloudDialogflowCxV3beta1FlowInput
// Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
type GoogleCloudDialogflowCxV3beta1FlowInput struct {
	Description           *string                                              `json:"description,omitempty"`
	DisplayName           *string                                              `json:"displayName,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3beta1EventHandlerInput    `json:"eventHandlers,omitempty"`
	Name                  *string                                              `json:"name,omitempty"`
	NluSettings           *GoogleCloudDialogflowCxV3beta1NluSettings           `json:"nluSettings,omitempty"`
	TransitionRouteGroups []string                                             `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3beta1TransitionRouteInput `json:"transitionRoutes,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1Flow
// Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
type GoogleCloudDialogflowCxV3beta1Flow struct {
	Description           *string                                         `json:"description,omitempty"`
	DisplayName           *string                                         `json:"displayName,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3beta1EventHandler    `json:"eventHandlers,omitempty"`
	Name                  *string                                         `json:"name,omitempty"`
	NluSettings           *GoogleCloudDialogflowCxV3beta1NluSettings      `json:"nluSettings,omitempty"`
	TransitionRouteGroups []string                                        `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoutes,omitempty"`
}
