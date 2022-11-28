package shared

// StreamingSetupTask
// A task which initializes part of a streaming Dataflow job.
type StreamingSetupTask struct {
	Drain                        *bool                             `json:"drain,omitempty"`
	ReceiveWorkPort              *int32                            `json:"receiveWorkPort,omitempty"`
	SnapshotConfig               *StreamingApplianceSnapshotConfig `json:"snapshotConfig,omitempty"`
	StreamingComputationTopology *TopologyConfig                   `json:"streamingComputationTopology,omitempty"`
	WorkerHarnessPort            *int32                            `json:"workerHarnessPort,omitempty"`
}
