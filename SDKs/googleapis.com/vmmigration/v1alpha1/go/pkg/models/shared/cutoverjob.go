package shared

type CutoverJobStateEnum string

const (
	CutoverJobStateEnumStateUnspecified CutoverJobStateEnum = "STATE_UNSPECIFIED"
	CutoverJobStateEnumPending          CutoverJobStateEnum = "PENDING"
	CutoverJobStateEnumFailed           CutoverJobStateEnum = "FAILED"
	CutoverJobStateEnumSucceeded        CutoverJobStateEnum = "SUCCEEDED"
	CutoverJobStateEnumCancelled        CutoverJobStateEnum = "CANCELLED"
	CutoverJobStateEnumCancelling       CutoverJobStateEnum = "CANCELLING"
	CutoverJobStateEnumActive           CutoverJobStateEnum = "ACTIVE"
	CutoverJobStateEnumAdaptingOs       CutoverJobStateEnum = "ADAPTING_OS"
)

type CutoverJob struct {
	ComputeEngineTargetDetails *ComputeEngineTargetDetails `json:"computeEngineTargetDetails"`
	ComputeEngineVMDetails     *TargetVMDetails            `json:"computeEngineVmDetails"`
	CreateTime                 *string                     `json:"createTime"`
	EndTime                    *string                     `json:"endTime"`
	Error                      *Status                     `json:"error"`
	Name                       *string                     `json:"name"`
	Progress                   *int32                      `json:"progress"`
	ProgressPercent            *int32                      `json:"progressPercent"`
	State                      *CutoverJobStateEnum        `json:"state"`
	StateMessage               *string                     `json:"stateMessage"`
	StateTime                  *string                     `json:"stateTime"`
	Steps                      []CutoverStep               `json:"steps"`
	TargetDetails              *TargetVMDetails            `json:"targetDetails"`
}
