package shared

// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage
// Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage struct {
	CoverageScore *float32                                                             `json:"coverageScore,omitempty"`
	Coverages     []GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage `json:"coverages,omitempty"`
}
