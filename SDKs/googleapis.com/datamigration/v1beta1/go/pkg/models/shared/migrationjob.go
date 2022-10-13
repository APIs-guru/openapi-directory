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
	CreateTime             *string                 `json:"createTime"`
	Destination            *string                 `json:"destination"`
	DestinationDatabase    *DatabaseType           `json:"destinationDatabase"`
	DisplayName            *string                 `json:"displayName"`
	DumpPath               *string                 `json:"dumpPath"`
	Duration               *string                 `json:"duration"`
	EndTime                *string                 `json:"endTime"`
	Error                  *Status                 `json:"error"`
	Labels                 map[string]string       `json:"labels"`
	Name                   *string                 `json:"name"`
	Phase                  *MigrationJobPhaseEnum  `json:"phase"`
	ReverseSSHConnectivity *ReverseSSHConnectivity `json:"reverseSshConnectivity"`
	Source                 *string                 `json:"source"`
	SourceDatabase         *DatabaseType           `json:"sourceDatabase"`
	State                  *MigrationJobStateEnum  `json:"state"`
	StaticIPConnectivity   map[string]interface{}  `json:"staticIpConnectivity"`
	Type                   *MigrationJobTypeEnum   `json:"type"`
	UpdateTime             *string                 `json:"updateTime"`
	VpcPeeringConnectivity *VpcPeeringConnectivity `json:"vpcPeeringConnectivity"`
}
