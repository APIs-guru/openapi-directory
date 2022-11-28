package shared

type EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum string

const (
	EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumUnspecified EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum = "UNSPECIFIED"
	EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSucceeded   EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum = "SUCCEEDED"
	EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSuspended   EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum = "SUSPENDED"
)

// EnterpriseCrmEventbusProtoSuccessPolicy
// Policy that dictates the behavior for the task after it completes successfully.
type EnterpriseCrmEventbusProtoSuccessPolicy struct {
	FinalState *EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum `json:"finalState,omitempty"`
}
