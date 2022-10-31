package shared




type CaptureOrderResponseExecutionStatusEnum string

const (
    CaptureOrderResponseExecutionStatusEnumExecutionStatusUnspecified CaptureOrderResponseExecutionStatusEnum = "EXECUTION_STATUS_UNSPECIFIED"
CaptureOrderResponseExecutionStatusEnumExecuted CaptureOrderResponseExecutionStatusEnum = "EXECUTED"
CaptureOrderResponseExecutionStatusEnumDuplicate CaptureOrderResponseExecutionStatusEnum = "DUPLICATE"
)


type CaptureOrderResponse struct {
    ExecutionStatus *CaptureOrderResponseExecutionStatusEnum `json:"executionStatus,omitempty"`
    
}

