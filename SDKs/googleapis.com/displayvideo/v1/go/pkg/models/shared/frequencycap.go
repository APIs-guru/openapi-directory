package shared

type FrequencyCapTimeUnitEnum string

const (
	FrequencyCapTimeUnitEnumTimeUnitUnspecified FrequencyCapTimeUnitEnum = "TIME_UNIT_UNSPECIFIED"
	FrequencyCapTimeUnitEnumTimeUnitLifetime    FrequencyCapTimeUnitEnum = "TIME_UNIT_LIFETIME"
	FrequencyCapTimeUnitEnumTimeUnitMonths      FrequencyCapTimeUnitEnum = "TIME_UNIT_MONTHS"
	FrequencyCapTimeUnitEnumTimeUnitWeeks       FrequencyCapTimeUnitEnum = "TIME_UNIT_WEEKS"
	FrequencyCapTimeUnitEnumTimeUnitDays        FrequencyCapTimeUnitEnum = "TIME_UNIT_DAYS"
	FrequencyCapTimeUnitEnumTimeUnitHours       FrequencyCapTimeUnitEnum = "TIME_UNIT_HOURS"
	FrequencyCapTimeUnitEnumTimeUnitMinutes     FrequencyCapTimeUnitEnum = "TIME_UNIT_MINUTES"
)

// FrequencyCap
// Settings that control the number of times a user may be shown with the same ad during a given time period.
type FrequencyCap struct {
	MaxImpressions *int32                    `json:"maxImpressions,omitempty"`
	TimeUnit       *FrequencyCapTimeUnitEnum `json:"timeUnit,omitempty"`
	TimeUnitCount  *int32                    `json:"timeUnitCount,omitempty"`
	Unlimited      *bool                     `json:"unlimited,omitempty"`
}
