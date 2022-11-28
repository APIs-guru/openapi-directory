package shared

// UpdateParametersRequestInput
// Request for UpdateParameters.
type UpdateParametersRequestInput struct {
	Parameters *MemcacheParametersInput `json:"parameters,omitempty"`
	UpdateMask *string                  `json:"updateMask,omitempty"`
}
