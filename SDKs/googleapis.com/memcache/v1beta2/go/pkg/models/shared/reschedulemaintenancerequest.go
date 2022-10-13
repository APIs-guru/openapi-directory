package shared

type RescheduleMaintenanceRequestRescheduleTypeEnum string

const (
	RescheduleMaintenanceRequestRescheduleTypeEnumRescheduleTypeUnspecified RescheduleMaintenanceRequestRescheduleTypeEnum = "RESCHEDULE_TYPE_UNSPECIFIED"
	RescheduleMaintenanceRequestRescheduleTypeEnumImmediate                 RescheduleMaintenanceRequestRescheduleTypeEnum = "IMMEDIATE"
	RescheduleMaintenanceRequestRescheduleTypeEnumNextAvailableWindow       RescheduleMaintenanceRequestRescheduleTypeEnum = "NEXT_AVAILABLE_WINDOW"
	RescheduleMaintenanceRequestRescheduleTypeEnumSpecificTime              RescheduleMaintenanceRequestRescheduleTypeEnum = "SPECIFIC_TIME"
)

type RescheduleMaintenanceRequest struct {
	RescheduleType *RescheduleMaintenanceRequestRescheduleTypeEnum `json:"rescheduleType"`
	ScheduleTime   *string                                         `json:"scheduleTime"`
}
