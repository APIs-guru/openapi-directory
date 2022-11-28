package shared

// BigTableIoDetails
// Metadata for a Cloud Bigtable connector used by the job.
type BigTableIoDetails struct {
	InstanceID *string `json:"instanceId,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
	TableID    *string `json:"tableId,omitempty"`
}
