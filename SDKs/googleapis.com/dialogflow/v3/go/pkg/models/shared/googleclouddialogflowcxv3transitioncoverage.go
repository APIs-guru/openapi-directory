package shared

// GoogleCloudDialogflowCxV3TransitionCoverage
// Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
type GoogleCloudDialogflowCxV3TransitionCoverage struct {
	CoverageScore *float32                                                `json:"coverageScore,omitempty"`
	Transitions   []GoogleCloudDialogflowCxV3TransitionCoverageTransition `json:"transitions,omitempty"`
}
