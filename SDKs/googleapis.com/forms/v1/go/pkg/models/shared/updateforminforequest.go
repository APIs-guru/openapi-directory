package shared

// UpdateFormInfoRequestInput
// Update Form's Info.
type UpdateFormInfoRequestInput struct {
	Info       *InfoInput `json:"info,omitempty"`
	UpdateMask *string    `json:"updateMask,omitempty"`
}
