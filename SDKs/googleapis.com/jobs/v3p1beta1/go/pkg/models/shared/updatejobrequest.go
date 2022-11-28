package shared

// UpdateJobRequest
// Input only. Update job request.
type UpdateJobRequest struct {
	Job        *Job    `json:"job,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
