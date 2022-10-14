package shared

type GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse struct {
	NextPageToken         *string                                         `json:"nextPageToken,omitempty"`
	TransitionRouteGroups []GoogleCloudDialogflowCxV3TransitionRouteGroup `json:"transitionRouteGroups,omitempty"`
}
