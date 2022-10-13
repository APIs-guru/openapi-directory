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

type CloneJob struct {
	ComputeEngineTargetDetails *ComputeEngineTargetDetails `json:"computeEngineTargetDetails"`
	CreateTime                 *string                     `json:"createTime"`
	EndTime                    *string                     `json:"endTime"`
	Error                      *Status                     `json:"error"`
	Name                       *string                     `json:"name"`
	State                      *CloneJobStateEnum          `json:"state"`
	StateTime                  *string                     `json:"stateTime"`
}
