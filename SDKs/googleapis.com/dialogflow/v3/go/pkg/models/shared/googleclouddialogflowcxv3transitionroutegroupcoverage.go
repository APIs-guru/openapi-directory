package shared

// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage
// Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
type GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage struct {
	CoverageScore *float32                                                        `json:"coverageScore,omitempty"`
	Coverages     []GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage `json:"coverages,omitempty"`
}
