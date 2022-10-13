package shared

type GoogleCloudDialogflowCxV3Page struct {
	DisplayName           *string                                    `json:"displayName"`
	EntryFulfillment      *GoogleCloudDialogflowCxV3Fulfillment      `json:"entryFulfillment"`
	EventHandlers         []GoogleCloudDialogflowCxV3EventHandler    `json:"eventHandlers"`
	Form                  *GoogleCloudDialogflowCxV3Form             `json:"form"`
	Name                  *string                                    `json:"name"`
	TransitionRouteGroups []string                                   `json:"transitionRouteGroups"`
	TransitionRoutes      []GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoutes"`
}
