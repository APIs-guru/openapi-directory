package shared

type ThrottlingSettingsPeriodEnum string

const (
	ThrottlingSettingsPeriodEnumSecondly      ThrottlingSettingsPeriodEnum = "SECONDLY"
	ThrottlingSettingsPeriodEnumRollingMinute ThrottlingSettingsPeriodEnum = "ROLLING_MINUTE"
)

// ThrottlingSettings
// Configuration details for webhook throttling.
type ThrottlingSettings struct {
	MaxConcurrentRequests int32                        `json:"maxConcurrentRequests"`
	Period                ThrottlingSettingsPeriodEnum `json:"period"`
}
