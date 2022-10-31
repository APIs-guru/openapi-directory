package shared



type GoogleCloudDialogflowCxV3TransitionCoverageTransition struct {
    Covered *bool `json:"covered,omitempty"`
    EventHandler *GoogleCloudDialogflowCxV3EventHandler `json:"eventHandler,omitempty"`
    Index *int32 `json:"index,omitempty"`
    Source *GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode `json:"source,omitempty"`
    Target *GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode `json:"target,omitempty"`
    TransitionRoute *GoogleCloudDialogflowCxV3TransitionRoute `json:"transitionRoute,omitempty"`
    
}

