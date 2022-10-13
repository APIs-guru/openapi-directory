package shared

type StreamingSetupTask struct {
	Drain                        *bool                             `json:"drain"`
	ReceiveWorkPort              *int32                            `json:"receiveWorkPort"`
	SnapshotConfig               *StreamingApplianceSnapshotConfig `json:"snapshotConfig"`
	StreamingComputationTopology *TopologyConfig                   `json:"streamingComputationTopology"`
	WorkerHarnessPort            *int32                            `json:"workerHarnessPort"`
}
