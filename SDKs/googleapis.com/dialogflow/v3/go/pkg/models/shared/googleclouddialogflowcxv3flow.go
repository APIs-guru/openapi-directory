package shared

type GoogleCloudDialogflowCxV3Flow struct {
	Description           *string                                    `json:"description"`
	DisplayName           *string                                    `json:"displayName"`
	EventHandlers         []GoogleCloudDialogflowCxV3EventHandler    `json:"eventHandlers"`
	Name                  *string                                    `json:"name"`
	NluSettings           *GoogleCloudDialogflowCxV3NluSettings      `json:"nluSettings"`
	TransitionRouteGroups []string                                   `json:"transitionRouteGroups"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoutes"`
}
