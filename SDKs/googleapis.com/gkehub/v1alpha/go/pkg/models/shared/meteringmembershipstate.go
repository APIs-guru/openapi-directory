package shared



type MeteringMembershipState struct {
    LastMeasurementTime *string `json:"lastMeasurementTime,omitempty"`
    PreciseLastMeasuredClusterVcpuCapacity *float32 `json:"preciseLastMeasuredClusterVcpuCapacity,omitempty"`
    
}

