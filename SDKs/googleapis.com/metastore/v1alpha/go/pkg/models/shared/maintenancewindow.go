package shared

type MaintenanceWindowDayOfWeekEnum string

const (
	MaintenanceWindowDayOfWeekEnumDayOfWeekUnspecified MaintenanceWindowDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	MaintenanceWindowDayOfWeekEnumMonday               MaintenanceWindowDayOfWeekEnum = "MONDAY"
	MaintenanceWindowDayOfWeekEnumTuesday              MaintenanceWindowDayOfWeekEnum = "TUESDAY"
	MaintenanceWindowDayOfWeekEnumWednesday            MaintenanceWindowDayOfWeekEnum = "WEDNESDAY"
	MaintenanceWindowDayOfWeekEnumThursday             MaintenanceWindowDayOfWeekEnum = "THURSDAY"
	MaintenanceWindowDayOfWeekEnumFriday               MaintenanceWindowDayOfWeekEnum = "FRIDAY"
	MaintenanceWindowDayOfWeekEnumSaturday             MaintenanceWindowDayOfWeekEnum = "SATURDAY"
	MaintenanceWindowDayOfWeekEnumSunday               MaintenanceWindowDayOfWeekEnum = "SUNDAY"
)

// MaintenanceWindow
// Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
type MaintenanceWindow struct {
	DayOfWeek *MaintenanceWindowDayOfWeekEnum `json:"dayOfWeek,omitempty"`
	HourOfDay *int32                          `json:"hourOfDay,omitempty"`
}
