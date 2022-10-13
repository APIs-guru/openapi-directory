package shared

type GoogleCloudDialogflowCxV3TransitionCoverageTransition struct {
	Covered         *bool                                                      `json:"covered"`
	EventHandler    *GoogleCloudDialogflowCxV3EventHandler                     `json:"eventHandler"`
	Index           *int32                                                     `json:"index"`
	Source          *GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode `json:"source"`
	Target          *GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode `json:"target"`
	TransitionRoute *GoogleCloudDialogflowCxV3TransitionRoute                  `json:"transitionRoute"`
}
