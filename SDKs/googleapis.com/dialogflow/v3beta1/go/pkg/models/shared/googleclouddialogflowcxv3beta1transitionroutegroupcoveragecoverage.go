package shared

type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage struct {
	CoverageScore *float32                                                                       `json:"coverageScore"`
	RouteGroup    *GoogleCloudDialogflowCxV3beta1TransitionRouteGroup                            `json:"routeGroup"`
	Transitions   []GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition `json:"transitions"`
}
