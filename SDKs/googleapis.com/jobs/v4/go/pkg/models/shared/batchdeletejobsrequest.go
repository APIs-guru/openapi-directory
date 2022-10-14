package shared

type BatchDeleteJobsRequest struct {
	Names []string `json:"names,omitempty"`
}
