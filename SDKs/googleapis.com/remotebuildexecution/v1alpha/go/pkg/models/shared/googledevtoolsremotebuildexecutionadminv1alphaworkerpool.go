package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumStateUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = "STATE_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumCreating         GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = "CREATING"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumRunning          GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = "RUNNING"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumUpdating         GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = "UPDATING"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumDeleting         GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = "DELETING"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumInactive         GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = "INACTIVE"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool struct {
	Autoscale    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale           `json:"autoscale,omitempty"`
	Channel      *string                                                            `json:"channel,omitempty"`
	HostOs       *string                                                            `json:"hostOs,omitempty"`
	Name         *string                                                            `json:"name,omitempty"`
	State        *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum `json:"state,omitempty"`
	WorkerConfig *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig        `json:"workerConfig,omitempty"`
	WorkerCount  *string                                                            `json:"workerCount,omitempty"`
}
