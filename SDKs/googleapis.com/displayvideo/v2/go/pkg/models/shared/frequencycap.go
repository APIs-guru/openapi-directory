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

type FrequencyCap struct {
	MaxImpressions *int32                    `json:"maxImpressions"`
	MaxViews       *int32                    `json:"maxViews"`
	TimeUnit       *FrequencyCapTimeUnitEnum `json:"timeUnit"`
	TimeUnitCount  *int32                    `json:"timeUnitCount"`
	Unlimited      *bool                     `json:"unlimited"`
}
