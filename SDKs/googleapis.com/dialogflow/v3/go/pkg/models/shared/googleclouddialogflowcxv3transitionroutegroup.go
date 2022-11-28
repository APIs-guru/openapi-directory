package shared

// GoogleCloudDialogflowCxV3TransitionRouteGroup
// An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
type GoogleCloudDialogflowCxV3TransitionRouteGroup struct {
	DisplayName      *string                                    `json:"displayName,omitempty"`
	Name             *string                                    `json:"name,omitempty"`
	TransitionRoutes []GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoutes,omitempty"`
}

// GoogleCloudDialogflowCxV3TransitionRouteGroupInput
// An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
type GoogleCloudDialogflowCxV3TransitionRouteGroupInput struct {
	DisplayName      *string                                         `json:"displayName,omitempty"`
	Name             *string                                         `json:"name,omitempty"`
	TransitionRoutes []GoogleCloudDialogflowCxV3TransitionRouteInput `json:"transitionRoutes,omitempty"`
}
