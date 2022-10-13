package shared

type GoogleCloudDialogflowCxV3beta1Page struct {
	DisplayName           *string                                         `json:"displayName"`
	EntryFulfillment      *GoogleCloudDialogflowCxV3beta1Fulfillment      `json:"entryFulfillment"`
	EventHandlers         []GoogleCloudDialogflowCxV3beta1EventHandler    `json:"eventHandlers"`
	Form                  *GoogleCloudDialogflowCxV3beta1Form             `json:"form"`
	Name                  *string                                         `json:"name"`
	TransitionRouteGroups []string                                        `json:"transitionRouteGroups"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoutes"`
}
