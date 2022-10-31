package shared

type TopologyConfig struct {
	Computations                  []ComputationTopology `json:"computations,omitempty"`
	DataDiskAssignments           []DataDiskAssignment  `json:"dataDiskAssignments,omitempty"`
	ForwardingKeyBits             *int32                `json:"forwardingKeyBits,omitempty"`
	PersistentStateVersion        *int32                `json:"persistentStateVersion,omitempty"`
	UserStageToComputationNameMap map[string]string     `json:"userStageToComputationNameMap,omitempty"`
}
