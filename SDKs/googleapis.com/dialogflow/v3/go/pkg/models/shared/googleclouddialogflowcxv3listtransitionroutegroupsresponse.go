package shared

// GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse
// The response message for TransitionRouteGroups.ListTransitionRouteGroups.
type GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse struct {
	NextPageToken         *string                                         `json:"nextPageToken,omitempty"`
	TransitionRouteGroups []GoogleCloudDialogflowCxV3TransitionRouteGroup `json:"transitionRouteGroups,omitempty"`
}
