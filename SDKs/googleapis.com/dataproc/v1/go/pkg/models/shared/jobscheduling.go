package shared

// JobScheduling
// Job scheduling options.
type JobScheduling struct {
	MaxFailuresPerHour *int32 `json:"maxFailuresPerHour,omitempty"`
	MaxFailuresTotal   *int32 `json:"maxFailuresTotal,omitempty"`
}
