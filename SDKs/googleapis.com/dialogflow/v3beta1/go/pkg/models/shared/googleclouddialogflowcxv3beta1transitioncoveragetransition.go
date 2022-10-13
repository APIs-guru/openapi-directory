package shared

type GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition struct {
	Covered         *bool                                                           `json:"covered"`
	EventHandler    *GoogleCloudDialogflowCxV3beta1EventHandler                     `json:"eventHandler"`
	Index           *int32                                                          `json:"index"`
	Source          *GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode `json:"source"`
	Target          *GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode `json:"target"`
	TransitionRoute *GoogleCloudDialogflowCxV3beta1TransitionRoute                  `json:"transitionRoute"`
}
