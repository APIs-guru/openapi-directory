package shared

// MeteringMembershipState
// **Metering**: Per-Membership Feature State.
type MeteringMembershipState struct {
	LastMeasurementTime                    *string  `json:"lastMeasurementTime,omitempty"`
	PreciseLastMeasuredClusterVcpuCapacity *float32 `json:"preciseLastMeasuredClusterVcpuCapacity,omitempty"`
}
