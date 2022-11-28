package shared

// GoogleCloudRunV2RunJobRequest
// Request message to create a new Execution of a Job.
type GoogleCloudRunV2RunJobRequest struct {
	Etag         *string `json:"etag,omitempty"`
	ValidateOnly *bool   `json:"validateOnly,omitempty"`
}
