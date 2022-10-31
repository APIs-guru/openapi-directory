package shared




type CloneJobStateEnum string

const (
    CloneJobStateEnumStateUnspecified CloneJobStateEnum = "STATE_UNSPECIFIED"
CloneJobStateEnumPending CloneJobStateEnum = "PENDING"
CloneJobStateEnumActive CloneJobStateEnum = "ACTIVE"
CloneJobStateEnumFailed CloneJobStateEnum = "FAILED"
CloneJobStateEnumSucceeded CloneJobStateEnum = "SUCCEEDED"
CloneJobStateEnumCancelled CloneJobStateEnum = "CANCELLED"
CloneJobStateEnumCancelling CloneJobStateEnum = "CANCELLING"
CloneJobStateEnumAdaptingOs CloneJobStateEnum = "ADAPTING_OS"
)


type CloneJob struct {
    ComputeEngineTargetDetails *ComputeEngineTargetDetails `json:"computeEngineTargetDetails,omitempty"`
    ComputeEngineVMDetails *TargetVMDetails `json:"computeEngineVmDetails,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Error *Status `json:"error,omitempty"`
    Name *string `json:"name,omitempty"`
    State *CloneJobStateEnum `json:"state,omitempty"`
    StateTime *string `json:"stateTime,omitempty"`
    Steps []CloneStep `json:"steps,omitempty"`
    TargetDetails *TargetVMDetails `json:"targetDetails,omitempty"`
    
}

