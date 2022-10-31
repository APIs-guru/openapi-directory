package shared

type ThrottlingSettingsPeriodEnum string

const (
	ThrottlingSettingsPeriodEnumSecondly      ThrottlingSettingsPeriodEnum = "SECONDLY"
	ThrottlingSettingsPeriodEnumRollingMinute ThrottlingSettingsPeriodEnum = "ROLLING_MINUTE"
)

type ThrottlingSettings struct {
	MaxConcurrentRequests int32                        `json:"maxConcurrentRequests"`
	Period                ThrottlingSettingsPeriodEnum `json:"period"`
}
