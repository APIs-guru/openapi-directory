package shared

type UpdateJobRequest struct {
	Job        *Job    `json:"job"`
	UpdateMask *string `json:"updateMask"`
}
