package shared

type RescheduleRescheduleTypeEnum string

const (
	RescheduleRescheduleTypeEnumRescheduleTypeUnspecified RescheduleRescheduleTypeEnum = "RESCHEDULE_TYPE_UNSPECIFIED"
	RescheduleRescheduleTypeEnumImmediate                 RescheduleRescheduleTypeEnum = "IMMEDIATE"
	RescheduleRescheduleTypeEnumNextAvailableWindow       RescheduleRescheduleTypeEnum = "NEXT_AVAILABLE_WINDOW"
	RescheduleRescheduleTypeEnumSpecificTime              RescheduleRescheduleTypeEnum = "SPECIFIC_TIME"
)

type Reschedule struct {
	RescheduleType *RescheduleRescheduleTypeEnum `json:"rescheduleType"`
	ScheduleTime   *string                       `json:"scheduleTime"`
}
