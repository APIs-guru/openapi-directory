package shared

type SchedulingConfig struct {
	Preemptible *bool `json:"preemptible"`
	Reserved    *bool `json:"reserved"`
}
