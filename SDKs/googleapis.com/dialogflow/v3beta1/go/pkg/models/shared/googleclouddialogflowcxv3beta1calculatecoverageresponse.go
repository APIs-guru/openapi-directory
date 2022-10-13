package shared

type GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse struct {
	Agent              *string                                                     `json:"agent"`
	IntentCoverage     *GoogleCloudDialogflowCxV3beta1IntentCoverage               `json:"intentCoverage"`
	RouteGroupCoverage *GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage `json:"routeGroupCoverage"`
	TransitionCoverage *GoogleCloudDialogflowCxV3beta1TransitionCoverage           `json:"transitionCoverage"`
}
