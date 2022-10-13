package shared

type ComputeSchedulingOnHostMaintenanceEnum string

const (
	ComputeSchedulingOnHostMaintenanceEnumOnHostMaintenanceUnspecified ComputeSchedulingOnHostMaintenanceEnum = "ON_HOST_MAINTENANCE_UNSPECIFIED"
	ComputeSchedulingOnHostMaintenanceEnumTerminate                    ComputeSchedulingOnHostMaintenanceEnum = "TERMINATE"
	ComputeSchedulingOnHostMaintenanceEnumMigrate                      ComputeSchedulingOnHostMaintenanceEnum = "MIGRATE"
)

type ComputeSchedulingRestartTypeEnum string

const (
	ComputeSchedulingRestartTypeEnumRestartTypeUnspecified ComputeSchedulingRestartTypeEnum = "RESTART_TYPE_UNSPECIFIED"
	ComputeSchedulingRestartTypeEnumAutomaticRestart       ComputeSchedulingRestartTypeEnum = "AUTOMATIC_RESTART"
	ComputeSchedulingRestartTypeEnumNoAutomaticRestart     ComputeSchedulingRestartTypeEnum = "NO_AUTOMATIC_RESTART"
)

type ComputeScheduling struct {
	AutomaticRestart  *bool                                   `json:"automaticRestart"`
	MinNodeCpus       *int32                                  `json:"minNodeCpus"`
	NodeAffinities    []SchedulingNodeAffinity                `json:"nodeAffinities"`
	OnHostMaintenance *ComputeSchedulingOnHostMaintenanceEnum `json:"onHostMaintenance"`
	RestartType       *ComputeSchedulingRestartTypeEnum       `json:"restartType"`
}
