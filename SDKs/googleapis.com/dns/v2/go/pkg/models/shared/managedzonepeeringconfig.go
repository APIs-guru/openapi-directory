package shared

type ManagedZonePeeringConfig struct {
	Kind          *string                                `json:"kind"`
	TargetNetwork *ManagedZonePeeringConfigTargetNetwork `json:"targetNetwork"`
}
