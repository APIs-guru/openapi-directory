package shared



type HTTPRouteFaultInjectionPolicyAbort struct {
    HTTPStatus *int32 `json:"httpStatus,omitempty"`
    Percentage *int32 `json:"percentage,omitempty"`
    
}

