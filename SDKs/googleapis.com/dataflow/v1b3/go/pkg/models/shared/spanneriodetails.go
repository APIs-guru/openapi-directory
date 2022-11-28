package shared

// SpannerIoDetails
// Metadata for a Spanner connector used by the job.
type SpannerIoDetails struct {
	DatabaseID *string `json:"databaseId,omitempty"`
	InstanceID *string `json:"instanceId,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
}
