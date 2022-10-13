package shared

type MigratingVMStateEnum string

const (
	MigratingVMStateEnumStateUnspecified MigratingVMStateEnum = "STATE_UNSPECIFIED"
	MigratingVMStateEnumPending          MigratingVMStateEnum = "PENDING"
	MigratingVMStateEnumReady            MigratingVMStateEnum = "READY"
	MigratingVMStateEnumFirstSync        MigratingVMStateEnum = "FIRST_SYNC"
	MigratingVMStateEnumActive           MigratingVMStateEnum = "ACTIVE"
	MigratingVMStateEnumCuttingOver      MigratingVMStateEnum = "CUTTING_OVER"
	MigratingVMStateEnumCutover          MigratingVMStateEnum = "CUTOVER"
	MigratingVMStateEnumFinalSync        MigratingVMStateEnum = "FINAL_SYNC"
	MigratingVMStateEnumPaused           MigratingVMStateEnum = "PAUSED"
	MigratingVMStateEnumFinalizing       MigratingVMStateEnum = "FINALIZING"
	MigratingVMStateEnumFinalized        MigratingVMStateEnum = "FINALIZED"
	MigratingVMStateEnumError            MigratingVMStateEnum = "ERROR"
)

type MigratingVM struct {
	ComputeEngineTargetDefaults *ComputeEngineTargetDefaults `json:"computeEngineTargetDefaults"`
	CreateTime                  *string                      `json:"createTime"`
	CurrentSyncInfo             *ReplicationCycle            `json:"currentSyncInfo"`
	Description                 *string                      `json:"description"`
	DisplayName                 *string                      `json:"displayName"`
	Error                       *Status                      `json:"error"`
	Group                       *string                      `json:"group"`
	Labels                      map[string]string            `json:"labels"`
	LastSync                    *ReplicationSync             `json:"lastSync"`
	Name                        *string                      `json:"name"`
	Policy                      *SchedulePolicy              `json:"policy"`
	RecentCloneJobs             []CloneJob                   `json:"recentCloneJobs"`
	RecentCutoverJobs           []CutoverJob                 `json:"recentCutoverJobs"`
	SourceVMID                  *string                      `json:"sourceVmId"`
	State                       *MigratingVMStateEnum        `json:"state"`
	StateTime                   *string                      `json:"stateTime"`
	UpdateTime                  *string                      `json:"updateTime"`
}
