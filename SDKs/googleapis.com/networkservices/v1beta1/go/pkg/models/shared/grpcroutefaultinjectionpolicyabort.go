package shared



type GrpcRouteFaultInjectionPolicyAbort struct {
    HTTPStatus *int32 `json:"httpStatus,omitempty"`
    Percentage *int32 `json:"percentage,omitempty"`
    
}

