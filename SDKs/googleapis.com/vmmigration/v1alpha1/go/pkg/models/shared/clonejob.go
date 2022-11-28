package shared

type CloneJobStateEnum string

const (
	CloneJobStateEnumStateUnspecified CloneJobStateEnum = "STATE_UNSPECIFIED"
	CloneJobStateEnumPending          CloneJobStateEnum = "PENDING"
	CloneJobStateEnumActive           CloneJobStateEnum = "ACTIVE"
	CloneJobStateEnumFailed           CloneJobStateEnum = "FAILED"
	CloneJobStateEnumSucceeded        CloneJobStateEnum = "SUCCEEDED"
	CloneJobStateEnumCancelled        CloneJobStateEnum = "CANCELLED"
	CloneJobStateEnumCancelling       CloneJobStateEnum = "CANCELLING"
	CloneJobStateEnumAdaptingOs       CloneJobStateEnum = "ADAPTING_OS"
)

// CloneJob
// CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
type CloneJob struct {
	ComputeEngineTargetDetails *ComputeEngineTargetDetails `json:"computeEngineTargetDetails,omitempty"`
	ComputeEngineVMDetails     *TargetVMDetails            `json:"computeEngineVmDetails,omitempty"`
	CreateTime                 *string                     `json:"createTime,omitempty"`
	EndTime                    *string                     `json:"endTime,omitempty"`
	Error                      *Status                     `json:"error,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
	State                      *CloneJobStateEnum          `json:"state,omitempty"`
	StateTime                  *string                     `json:"stateTime,omitempty"`
	Steps                      []CloneStep                 `json:"steps,omitempty"`
	TargetDetails              *TargetVMDetails            `json:"targetDetails,omitempty"`
}

// CloneJobInput
// CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
type CloneJobInput struct {
	ComputeEngineTargetDetails *ComputeEngineTargetDetails `json:"computeEngineTargetDetails,omitempty"`
	ComputeEngineVMDetails     *TargetVMDetailsInput       `json:"computeEngineVmDetails,omitempty"`
	Error                      *Status                     `json:"error,omitempty"`
	TargetDetails              *TargetVMDetailsInput       `json:"targetDetails,omitempty"`
}
