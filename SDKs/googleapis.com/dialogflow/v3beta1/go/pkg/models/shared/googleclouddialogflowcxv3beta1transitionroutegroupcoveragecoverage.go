package shared

// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage
// Coverage result message for one transition route group.
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage struct {
	CoverageScore *float32                                                                       `json:"coverageScore,omitempty"`
	RouteGroup    *GoogleCloudDialogflowCxV3beta1TransitionRouteGroup                            `json:"routeGroup,omitempty"`
	Transitions   []GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition `json:"transitions,omitempty"`
}
