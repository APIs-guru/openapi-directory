package shared

type SchedulePolicy struct {
	IdleDuration     *string `json:"idleDuration"`
	SkipOsAdaptation *bool   `json:"skipOsAdaptation"`
}
