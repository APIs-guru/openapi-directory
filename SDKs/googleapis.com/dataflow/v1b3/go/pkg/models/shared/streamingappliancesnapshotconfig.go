package shared

type StreamingApplianceSnapshotConfig struct {
	ImportStateEndpoint *string `json:"importStateEndpoint,omitempty"`
	SnapshotID          *string `json:"snapshotId,omitempty"`
}
