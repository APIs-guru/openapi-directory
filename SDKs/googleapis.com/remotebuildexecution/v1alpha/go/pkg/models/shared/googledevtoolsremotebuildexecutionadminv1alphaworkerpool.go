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
	Autoscale    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale           `json:"autoscale"`
	Channel      *string                                                            `json:"channel"`
	HostOs       *string                                                            `json:"hostOs"`
	Name         *string                                                            `json:"name"`
	State        *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum `json:"state"`
	WorkerConfig *GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig        `json:"workerConfig"`
	WorkerCount  *string                                                            `json:"workerCount"`
}
