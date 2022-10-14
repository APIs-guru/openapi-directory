package shared

type DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum string

const (
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday               DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "MONDAY"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumTuesday              DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "TUESDAY"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday            DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "WEDNESDAY"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumThursday             DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "THURSDAY"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumFriday               DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "FRIDAY"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSaturday             DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "SATURDAY"
	DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday               DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum = "SUNDAY"
)

type DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum string

const (
	DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum = "TIME_ZONE_RESOLUTION_UNSPECIFIED"
	DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser     DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum = "TIME_ZONE_RESOLUTION_END_USER"
	DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser  DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum = "TIME_ZONE_RESOLUTION_ADVERTISER"
)

type DayAndTimeAssignedTargetingOptionDetails struct {
	DayOfWeek          *DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum          `json:"dayOfWeek,omitempty"`
	EndHour            *int32                                                          `json:"endHour,omitempty"`
	StartHour          *int32                                                          `json:"startHour,omitempty"`
	TimeZoneResolution *DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum `json:"timeZoneResolution,omitempty"`
}
