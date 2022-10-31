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
	ComputeEngineTargetDefaults *ComputeEngineTargetDefaults `json:"computeEngineTargetDefaults,omitempty"`
	ComputeEngineVMDefaults     *TargetVMDetails             `json:"computeEngineVmDefaults,omitempty"`
	CreateTime                  *string                      `json:"createTime,omitempty"`
	CurrentSyncInfo             *ReplicationCycle            `json:"currentSyncInfo,omitempty"`
	Description                 *string                      `json:"description,omitempty"`
	DisplayName                 *string                      `json:"displayName,omitempty"`
	Error                       *Status                      `json:"error,omitempty"`
	Group                       *string                      `json:"group,omitempty"`
	Labels                      map[string]string            `json:"labels,omitempty"`
	LastSync                    *ReplicationSync             `json:"lastSync,omitempty"`
	Name                        *string                      `json:"name,omitempty"`
	Policy                      *SchedulePolicy              `json:"policy,omitempty"`
	RecentCloneJobs             []CloneJob                   `json:"recentCloneJobs,omitempty"`
	RecentCutoverJobs           []CutoverJob                 `json:"recentCutoverJobs,omitempty"`
	SourceVMID                  *string                      `json:"sourceVmId,omitempty"`
	State                       *MigratingVMStateEnum        `json:"state,omitempty"`
	StateTime                   *string                      `json:"stateTime,omitempty"`
	TargetDefaults              *TargetVMDetails             `json:"targetDefaults,omitempty"`
	UpdateTime                  *string                      `json:"updateTime,omitempty"`
}
