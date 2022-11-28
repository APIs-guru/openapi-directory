package shared

// GoogleCloudDialogflowCxV3CalculateCoverageResponse
// The response message for TestCases.CalculateCoverage.
type GoogleCloudDialogflowCxV3CalculateCoverageResponse struct {
	Agent              *string                                                `json:"agent,omitempty"`
	IntentCoverage     *GoogleCloudDialogflowCxV3IntentCoverage               `json:"intentCoverage,omitempty"`
	RouteGroupCoverage *GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage `json:"routeGroupCoverage,omitempty"`
	TransitionCoverage *GoogleCloudDialogflowCxV3TransitionCoverage           `json:"transitionCoverage,omitempty"`
}
