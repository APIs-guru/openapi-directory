package shared

type SchedulingConfig struct {
	Preemptible *bool `json:"preemptible,omitempty"`
	Reserved    *bool `json:"reserved,omitempty"`
}
