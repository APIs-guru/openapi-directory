package shared

type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage struct {
	CoverageScore *float32                                                                       `json:"coverageScore,omitempty"`
	RouteGroup    *GoogleCloudDialogflowCxV3beta1TransitionRouteGroup                            `json:"routeGroup,omitempty"`
	Transitions   []GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition `json:"transitions,omitempty"`
}
