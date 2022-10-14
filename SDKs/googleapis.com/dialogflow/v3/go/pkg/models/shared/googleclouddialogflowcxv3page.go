package shared

type GoogleCloudDialogflowCxV3Page struct {
	DisplayName           *string                                    `json:"displayName,omitempty"`
	EntryFulfillment      *GoogleCloudDialogflowCxV3Fulfillment      `json:"entryFulfillment,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3EventHandler    `json:"eventHandlers,omitempty"`
	Form                  *GoogleCloudDialogflowCxV3Form             `json:"form,omitempty"`
	Name                  *string                                    `json:"name,omitempty"`
	TransitionRouteGroups []string                                   `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoutes,omitempty"`
}
