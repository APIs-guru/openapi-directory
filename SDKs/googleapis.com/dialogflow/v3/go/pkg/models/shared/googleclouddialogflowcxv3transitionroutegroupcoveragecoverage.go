package shared

// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage
// Coverage result message for one transition route group.
type GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage struct {
	CoverageScore *float32                                                                  `json:"coverageScore,omitempty"`
	RouteGroup    *GoogleCloudDialogflowCxV3TransitionRouteGroup                            `json:"routeGroup,omitempty"`
	Transitions   []GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition `json:"transitions,omitempty"`
}
