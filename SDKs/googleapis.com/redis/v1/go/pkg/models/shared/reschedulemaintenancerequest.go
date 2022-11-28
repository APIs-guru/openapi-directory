package shared

type RescheduleMaintenanceRequestRescheduleTypeEnum string

const (
	RescheduleMaintenanceRequestRescheduleTypeEnumRescheduleTypeUnspecified RescheduleMaintenanceRequestRescheduleTypeEnum = "RESCHEDULE_TYPE_UNSPECIFIED"
	RescheduleMaintenanceRequestRescheduleTypeEnumImmediate                 RescheduleMaintenanceRequestRescheduleTypeEnum = "IMMEDIATE"
	RescheduleMaintenanceRequestRescheduleTypeEnumNextAvailableWindow       RescheduleMaintenanceRequestRescheduleTypeEnum = "NEXT_AVAILABLE_WINDOW"
	RescheduleMaintenanceRequestRescheduleTypeEnumSpecificTime              RescheduleMaintenanceRequestRescheduleTypeEnum = "SPECIFIC_TIME"
)

// RescheduleMaintenanceRequest
// Request for RescheduleMaintenance.
type RescheduleMaintenanceRequest struct {
	RescheduleType *RescheduleMaintenanceRequestRescheduleTypeEnum `json:"rescheduleType,omitempty"`
	ScheduleTime   *string                                         `json:"scheduleTime,omitempty"`
}
