package shared

type SpannerIoDetails struct {
	DatabaseID *string `json:"databaseId,omitempty"`
	InstanceID *string `json:"instanceId,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
}
