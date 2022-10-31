package shared



type GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition struct {
    Covered *bool `json:"covered,omitempty"`
    EventHandler *GoogleCloudDialogflowCxV3beta1EventHandler `json:"eventHandler,omitempty"`
    Index *int32 `json:"index,omitempty"`
    Source *GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode `json:"source,omitempty"`
    Target *GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode `json:"target,omitempty"`
    TransitionRoute *GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoute,omitempty"`
    
}

