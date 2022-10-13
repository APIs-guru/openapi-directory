package shared

type ApplyParametersRequest struct {
	ApplyAll *bool    `json:"applyAll"`
	NodeIds  []string `json:"nodeIds"`
}
