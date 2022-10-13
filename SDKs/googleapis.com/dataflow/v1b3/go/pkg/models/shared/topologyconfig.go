package shared

type TopologyConfig struct {
	Computations                  []ComputationTopology `json:"computations"`
	DataDiskAssignments           []DataDiskAssignment  `json:"dataDiskAssignments"`
	ForwardingKeyBits             *int32                `json:"forwardingKeyBits"`
	PersistentStateVersion        *int32                `json:"persistentStateVersion"`
	UserStageToComputationNameMap map[string]string     `json:"userStageToComputationNameMap"`
}
