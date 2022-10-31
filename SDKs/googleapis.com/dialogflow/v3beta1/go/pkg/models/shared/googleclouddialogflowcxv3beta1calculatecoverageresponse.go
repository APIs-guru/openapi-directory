package shared



type GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse struct {
    Agent *string `json:"agent,omitempty"`
    IntentCoverage *GoogleCloudDialogflowCxV3beta1IntentCoverage `json:"intentCoverage,omitempty"`
    RouteGroupCoverage *GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage `json:"routeGroupCoverage,omitempty"`
    TransitionCoverage *GoogleCloudDialogflowCxV3beta1TransitionCoverage `json:"transitionCoverage,omitempty"`
    
}

