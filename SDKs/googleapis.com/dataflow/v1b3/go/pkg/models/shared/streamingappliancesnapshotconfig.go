package shared

type StreamingApplianceSnapshotConfig struct {
	ImportStateEndpoint *string `json:"importStateEndpoint"`
	SnapshotID          *string `json:"snapshotId"`
}
