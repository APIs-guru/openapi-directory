package shared

// UpdateReleaseRequestInput
// The request for FirebaseRulesService.UpdateRelease.
type UpdateReleaseRequestInput struct {
	Release    *ReleaseInput `json:"release,omitempty"`
	UpdateMask *string       `json:"updateMask,omitempty"`
}
