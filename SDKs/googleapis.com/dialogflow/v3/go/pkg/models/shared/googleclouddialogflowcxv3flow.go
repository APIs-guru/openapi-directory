package shared

type GoogleCloudDialogflowCxV3Flow struct {
	Description           *string                                    `json:"description,omitempty"`
	DisplayName           *string                                    `json:"displayName,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3EventHandler    `json:"eventHandlers,omitempty"`
	Name                  *string                                    `json:"name,omitempty"`
	NluSettings           *GoogleCloudDialogflowCxV3NluSettings      `json:"nluSettings,omitempty"`
	TransitionRouteGroups []string                                   `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoutes,omitempty"`
}
