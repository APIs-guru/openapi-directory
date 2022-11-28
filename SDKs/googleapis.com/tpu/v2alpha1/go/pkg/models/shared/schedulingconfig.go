package shared

// SchedulingConfig
// Sets the scheduling options for this node.
type SchedulingConfig struct {
	Preemptible *bool `json:"preemptible,omitempty"`
	Reserved    *bool `json:"reserved,omitempty"`
}
