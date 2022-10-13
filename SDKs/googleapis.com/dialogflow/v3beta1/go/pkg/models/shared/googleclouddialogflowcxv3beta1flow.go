package shared

type GoogleCloudDialogflowCxV3beta1Flow struct {
	Description           *string                                         `json:"description"`
	DisplayName           *string                                         `json:"displayName"`
	EventHandlers         []GoogleCloudDialogflowCxV3beta1EventHandler    `json:"eventHandlers"`
	Name                  *string                                         `json:"name"`
	NluSettings           *GoogleCloudDialogflowCxV3beta1NluSettings      `json:"nluSettings"`
	TransitionRouteGroups []string                                        `json:"transitionRouteGroups"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoutes"`
}
