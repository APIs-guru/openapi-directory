package shared

// GoogleCloudChannelV1Report
// The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.
type GoogleCloudChannelV1Report struct {
	Columns     []GoogleCloudChannelV1Column `json:"columns,omitempty"`
	Description *string                      `json:"description,omitempty"`
	DisplayName *string                      `json:"displayName,omitempty"`
	Name        *string                      `json:"name,omitempty"`
}
