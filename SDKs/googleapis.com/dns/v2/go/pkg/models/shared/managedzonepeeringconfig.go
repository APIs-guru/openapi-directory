package shared



type ManagedZonePeeringConfig struct {
    Kind *string `json:"kind,omitempty"`
    TargetNetwork *ManagedZonePeeringConfigTargetNetwork `json:"targetNetwork,omitempty"`
    
}

