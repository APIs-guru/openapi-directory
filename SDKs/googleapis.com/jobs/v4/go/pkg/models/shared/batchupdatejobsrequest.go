package shared

type BatchUpdateJobsRequest struct {
	Jobs       []Job   `json:"jobs"`
	UpdateMask *string `json:"updateMask"`
}
