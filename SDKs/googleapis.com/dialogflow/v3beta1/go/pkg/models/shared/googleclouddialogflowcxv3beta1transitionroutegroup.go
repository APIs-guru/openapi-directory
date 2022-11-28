package shared

// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput
// An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput struct {
	DisplayName      *string                                              `json:"displayName,omitempty"`
	Name             *string                                              `json:"name,omitempty"`
	TransitionRoutes []GoogleCloudDialogflowCxV3beta1TransitionRouteInput `json:"transitionRoutes,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
// An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroup struct {
	DisplayName      *string                                         `json:"displayName,omitempty"`
	Name             *string                                         `json:"name,omitempty"`
	TransitionRoutes []GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoutes,omitempty"`
}
