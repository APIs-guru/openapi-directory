package shared

// GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse
// The response message for TransitionRouteGroups.ListTransitionRouteGroups.
type GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse struct {
	NextPageToken         *string                                              `json:"nextPageToken,omitempty"`
	TransitionRouteGroups []GoogleCloudDialogflowCxV3beta1TransitionRouteGroup `json:"transitionRouteGroups,omitempty"`
}
