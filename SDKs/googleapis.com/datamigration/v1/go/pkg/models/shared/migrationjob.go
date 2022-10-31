package shared

type MigrationJobPhaseEnum string

const (
	MigrationJobPhaseEnumPhaseUnspecified             MigrationJobPhaseEnum = "PHASE_UNSPECIFIED"
	MigrationJobPhaseEnumFullDump                     MigrationJobPhaseEnum = "FULL_DUMP"
	MigrationJobPhaseEnumCdc                          MigrationJobPhaseEnum = "CDC"
	MigrationJobPhaseEnumPromoteInProgress            MigrationJobPhaseEnum = "PROMOTE_IN_PROGRESS"
	MigrationJobPhaseEnumWaitingForSourceWritesToStop MigrationJobPhaseEnum = "WAITING_FOR_SOURCE_WRITES_TO_STOP"
	MigrationJobPhaseEnumPreparingTheDump             MigrationJobPhaseEnum = "PREPARING_THE_DUMP"
)

type MigrationJobStateEnum string

const (
	MigrationJobStateEnumStateUnspecified MigrationJobStateEnum = "STATE_UNSPECIFIED"
	MigrationJobStateEnumMaintenance      MigrationJobStateEnum = "MAINTENANCE"
	MigrationJobStateEnumDraft            MigrationJobStateEnum = "DRAFT"
	MigrationJobStateEnumCreating         MigrationJobStateEnum = "CREATING"
	MigrationJobStateEnumNotStarted       MigrationJobStateEnum = "NOT_STARTED"
	MigrationJobStateEnumRunning          MigrationJobStateEnum = "RUNNING"
	MigrationJobStateEnumFailed           MigrationJobStateEnum = "FAILED"
	MigrationJobStateEnumCompleted        MigrationJobStateEnum = "COMPLETED"
	MigrationJobStateEnumDeleting         MigrationJobStateEnum = "DELETING"
	MigrationJobStateEnumStopping         MigrationJobStateEnum = "STOPPING"
	MigrationJobStateEnumStopped          MigrationJobStateEnum = "STOPPED"
	MigrationJobStateEnumDeleted          MigrationJobStateEnum = "DELETED"
	MigrationJobStateEnumUpdating         MigrationJobStateEnum = "UPDATING"
	MigrationJobStateEnumStarting         MigrationJobStateEnum = "STARTING"
	MigrationJobStateEnumRestarting       MigrationJobStateEnum = "RESTARTING"
	MigrationJobStateEnumResuming         MigrationJobStateEnum = "RESUMING"
)

type MigrationJobTypeEnum string

const (
	MigrationJobTypeEnumTypeUnspecified MigrationJobTypeEnum = "TYPE_UNSPECIFIED"
	MigrationJobTypeEnumOneTime         MigrationJobTypeEnum = "ONE_TIME"
	MigrationJobTypeEnumContinuous      MigrationJobTypeEnum = "CONTINUOUS"
)

type MigrationJob struct {
	CreateTime             *string                 `json:"createTime,omitempty"`
	Destination            *string                 `json:"destination,omitempty"`
	DestinationDatabase    *DatabaseType           `json:"destinationDatabase,omitempty"`
	DisplayName            *string                 `json:"displayName,omitempty"`
	DumpFlags              *DumpFlags              `json:"dumpFlags,omitempty"`
	DumpPath               *string                 `json:"dumpPath,omitempty"`
	Duration               *string                 `json:"duration,omitempty"`
	EndTime                *string                 `json:"endTime,omitempty"`
	Error                  *Status                 `json:"error,omitempty"`
	Labels                 map[string]string       `json:"labels,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	Phase                  *MigrationJobPhaseEnum  `json:"phase,omitempty"`
	ReverseSSHConnectivity *ReverseSSHConnectivity `json:"reverseSshConnectivity,omitempty"`
	Source                 *string                 `json:"source,omitempty"`
	SourceDatabase         *DatabaseType           `json:"sourceDatabase,omitempty"`
	State                  *MigrationJobStateEnum  `json:"state,omitempty"`
	StaticIPConnectivity   map[string]interface{}  `json:"staticIpConnectivity,omitempty"`
	Type                   *MigrationJobTypeEnum   `json:"type,omitempty"`
	UpdateTime             *string                 `json:"updateTime,omitempty"`
	VpcPeeringConnectivity *VpcPeeringConnectivity `json:"vpcPeeringConnectivity,omitempty"`
}
