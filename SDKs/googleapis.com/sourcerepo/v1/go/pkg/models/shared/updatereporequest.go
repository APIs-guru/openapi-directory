package shared

// UpdateRepoRequest
// Request for UpdateRepo.
type UpdateRepoRequest struct {
	Repo       *Repo   `json:"repo,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
