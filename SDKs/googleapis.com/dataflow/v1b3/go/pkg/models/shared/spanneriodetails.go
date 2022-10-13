package shared

type SpannerIoDetails struct {
	DatabaseID *string `json:"databaseId"`
	InstanceID *string `json:"instanceId"`
	ProjectID  *string `json:"projectId"`
}
