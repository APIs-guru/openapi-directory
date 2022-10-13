package shared

type GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage struct {
	CoverageScore *float32                                                                  `json:"coverageScore"`
	RouteGroup    *GoogleCloudDialogflowCxV3TransitionRouteGroup                            `json:"routeGroup"`
	Transitions   []GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition `json:"transitions"`
}
