package shared

type ApplySoftwareUpdateRequest struct {
	ApplyAll *bool    `json:"applyAll"`
	NodeIds  []string `json:"nodeIds"`
}
