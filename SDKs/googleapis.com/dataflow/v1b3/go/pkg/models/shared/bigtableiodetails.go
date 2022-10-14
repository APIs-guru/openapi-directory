package shared

type BigTableIoDetails struct {
	InstanceID *string `json:"instanceId,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
	TableID    *string `json:"tableId,omitempty"`
}
