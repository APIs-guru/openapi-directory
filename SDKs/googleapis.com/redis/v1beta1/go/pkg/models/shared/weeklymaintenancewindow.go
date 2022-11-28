package shared

type WeeklyMaintenanceWindowDayEnum string

const (
	WeeklyMaintenanceWindowDayEnumDayOfWeekUnspecified WeeklyMaintenanceWindowDayEnum = "DAY_OF_WEEK_UNSPECIFIED"
	WeeklyMaintenanceWindowDayEnumMonday               WeeklyMaintenanceWindowDayEnum = "MONDAY"
	WeeklyMaintenanceWindowDayEnumTuesday              WeeklyMaintenanceWindowDayEnum = "TUESDAY"
	WeeklyMaintenanceWindowDayEnumWednesday            WeeklyMaintenanceWindowDayEnum = "WEDNESDAY"
	WeeklyMaintenanceWindowDayEnumThursday             WeeklyMaintenanceWindowDayEnum = "THURSDAY"
	WeeklyMaintenanceWindowDayEnumFriday               WeeklyMaintenanceWindowDayEnum = "FRIDAY"
	WeeklyMaintenanceWindowDayEnumSaturday             WeeklyMaintenanceWindowDayEnum = "SATURDAY"
	WeeklyMaintenanceWindowDayEnumSunday               WeeklyMaintenanceWindowDayEnum = "SUNDAY"
)

// WeeklyMaintenanceWindowInput
// Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
type WeeklyMaintenanceWindowInput struct {
	Day       *WeeklyMaintenanceWindowDayEnum `json:"day,omitempty"`
	StartTime *TimeOfDay                      `json:"startTime,omitempty"`
}

// WeeklyMaintenanceWindow
// Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
type WeeklyMaintenanceWindow struct {
	Day       *WeeklyMaintenanceWindowDayEnum `json:"day,omitempty"`
	Duration  *string                         `json:"duration,omitempty"`
	StartTime *TimeOfDay                      `json:"startTime,omitempty"`
}
