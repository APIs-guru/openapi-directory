package shared

// SchedulePolicy
// A policy for scheduling replications.
type SchedulePolicy struct {
	IdleDuration     *string `json:"idleDuration,omitempty"`
	SkipOsAdaptation *bool   `json:"skipOsAdaptation,omitempty"`
}
