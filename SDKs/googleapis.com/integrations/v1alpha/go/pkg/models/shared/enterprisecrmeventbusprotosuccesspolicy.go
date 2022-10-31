package shared




type EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum string

const (
    EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumUnspecified EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum = "UNSPECIFIED"
EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSucceeded EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum = "SUCCEEDED"
EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnumSuspended EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum = "SUSPENDED"
)


type EnterpriseCrmEventbusProtoSuccessPolicy struct {
    FinalState *EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum `json:"finalState,omitempty"`
    
}

