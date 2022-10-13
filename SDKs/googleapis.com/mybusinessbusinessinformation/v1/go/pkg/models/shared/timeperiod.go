package shared

type TimePeriodCloseDayEnum string

const (
	TimePeriodCloseDayEnumDayOfWeekUnspecified TimePeriodCloseDayEnum = "DAY_OF_WEEK_UNSPECIFIED"
	TimePeriodCloseDayEnumMonday               TimePeriodCloseDayEnum = "MONDAY"
	TimePeriodCloseDayEnumTuesday              TimePeriodCloseDayEnum = "TUESDAY"
	TimePeriodCloseDayEnumWednesday            TimePeriodCloseDayEnum = "WEDNESDAY"
	TimePeriodCloseDayEnumThursday             TimePeriodCloseDayEnum = "THURSDAY"
	TimePeriodCloseDayEnumFriday               TimePeriodCloseDayEnum = "FRIDAY"
	TimePeriodCloseDayEnumSaturday             TimePeriodCloseDayEnum = "SATURDAY"
	TimePeriodCloseDayEnumSunday               TimePeriodCloseDayEnum = "SUNDAY"
)

type TimePeriodOpenDayEnum string

const (
	TimePeriodOpenDayEnumDayOfWeekUnspecified TimePeriodOpenDayEnum = "DAY_OF_WEEK_UNSPECIFIED"
	TimePeriodOpenDayEnumMonday               TimePeriodOpenDayEnum = "MONDAY"
	TimePeriodOpenDayEnumTuesday              TimePeriodOpenDayEnum = "TUESDAY"
	TimePeriodOpenDayEnumWednesday            TimePeriodOpenDayEnum = "WEDNESDAY"
	TimePeriodOpenDayEnumThursday             TimePeriodOpenDayEnum = "THURSDAY"
	TimePeriodOpenDayEnumFriday               TimePeriodOpenDayEnum = "FRIDAY"
	TimePeriodOpenDayEnumSaturday             TimePeriodOpenDayEnum = "SATURDAY"
	TimePeriodOpenDayEnumSunday               TimePeriodOpenDayEnum = "SUNDAY"
)

type TimePeriod struct {
	CloseDay  *TimePeriodCloseDayEnum `json:"closeDay"`
	CloseTime *TimeOfDay              `json:"closeTime"`
	OpenDay   *TimePeriodOpenDayEnum  `json:"openDay"`
	OpenTime  *TimeOfDay              `json:"openTime"`
}
