package shared

type GoogleCloudDialogflowCxV3CalculateCoverageResponse struct {
	Agent              *string                                                `json:"agent"`
	IntentCoverage     *GoogleCloudDialogflowCxV3IntentCoverage               `json:"intentCoverage"`
	RouteGroupCoverage *GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage `json:"routeGroupCoverage"`
	TransitionCoverage *GoogleCloudDialogflowCxV3TransitionCoverage           `json:"transitionCoverage"`
}
