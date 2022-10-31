package shared




type CutoverJobStateEnum string

const (
    CutoverJobStateEnumStateUnspecified CutoverJobStateEnum = "STATE_UNSPECIFIED"
CutoverJobStateEnumPending CutoverJobStateEnum = "PENDING"
CutoverJobStateEnumFailed CutoverJobStateEnum = "FAILED"
CutoverJobStateEnumSucceeded CutoverJobStateEnum = "SUCCEEDED"
CutoverJobStateEnumCancelled CutoverJobStateEnum = "CANCELLED"
CutoverJobStateEnumCancelling CutoverJobStateEnum = "CANCELLING"
CutoverJobStateEnumActive CutoverJobStateEnum = "ACTIVE"
CutoverJobStateEnumAdaptingOs CutoverJobStateEnum = "ADAPTING_OS"
)


type CutoverJob struct {
    ComputeEngineTargetDetails *ComputeEngineTargetDetails `json:"computeEngineTargetDetails,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Error *Status `json:"error,omitempty"`
    Name *string `json:"name,omitempty"`
    ProgressPercent *int32 `json:"progressPercent,omitempty"`
    State *CutoverJobStateEnum `json:"state,omitempty"`
    StateMessage *string `json:"stateMessage,omitempty"`
    StateTime *string `json:"stateTime,omitempty"`
    
}

