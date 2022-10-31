package shared

type BatchUpdateJobsRequest struct {
	Jobs       []Job   `json:"jobs,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
