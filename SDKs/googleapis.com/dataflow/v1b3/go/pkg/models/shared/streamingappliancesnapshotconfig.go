package shared

// StreamingApplianceSnapshotConfig
// Streaming appliance snapshot configuration.
type StreamingApplianceSnapshotConfig struct {
	ImportStateEndpoint *string `json:"importStateEndpoint,omitempty"`
	SnapshotID          *string `json:"snapshotId,omitempty"`
}
