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

// ComputeScheduling
// Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
type ComputeScheduling struct {
	AutomaticRestart  *bool                                   `json:"automaticRestart,omitempty"`
	MinNodeCpus       *int32                                  `json:"minNodeCpus,omitempty"`
	NodeAffinities    []SchedulingNodeAffinity                `json:"nodeAffinities,omitempty"`
	OnHostMaintenance *ComputeSchedulingOnHostMaintenanceEnum `json:"onHostMaintenance,omitempty"`
	RestartType       *ComputeSchedulingRestartTypeEnum       `json:"restartType,omitempty"`
}
