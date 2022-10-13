package shared

type MeteringMembershipState struct {
	LastMeasurementTime                    *string  `json:"lastMeasurementTime"`
	PreciseLastMeasuredClusterVcpuCapacity *float32 `json:"preciseLastMeasuredClusterVcpuCapacity"`
}
