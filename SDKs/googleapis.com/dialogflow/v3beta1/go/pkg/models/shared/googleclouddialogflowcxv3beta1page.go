package shared

type GoogleCloudDialogflowCxV3beta1Page struct {
	DisplayName           *string                                         `json:"displayName,omitempty"`
	EntryFulfillment      *GoogleCloudDialogflowCxV3beta1Fulfillment      `json:"entryFulfillment,omitempty"`
	EventHandlers         []GoogleCloudDialogflowCxV3beta1EventHandler    `json:"eventHandlers,omitempty"`
	Form                  *GoogleCloudDialogflowCxV3beta1Form             `json:"form,omitempty"`
	Name                  *string                                         `json:"name,omitempty"`
	TransitionRouteGroups []string                                        `json:"transitionRouteGroups,omitempty"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoutes,omitempty"`
}
