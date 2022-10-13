package shared

type UpdateRepoRequest struct {
	Repo       *Repo   `json:"repo"`
	UpdateMask *string `json:"updateMask"`
}
