package shared

type JobScheduling struct {
	MaxFailuresPerHour *int32 `json:"maxFailuresPerHour"`
	MaxFailuresTotal   *int32 `json:"maxFailuresTotal"`
}
