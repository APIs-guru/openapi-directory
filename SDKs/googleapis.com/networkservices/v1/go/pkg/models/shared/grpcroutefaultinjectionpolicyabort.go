package shared

// GrpcRouteFaultInjectionPolicyAbort
// Specification of how client requests are aborted as part of fault injection before being sent to a destination.
type GrpcRouteFaultInjectionPolicyAbort struct {
	HTTPStatus *int32 `json:"httpStatus,omitempty"`
	Percentage *int32 `json:"percentage,omitempty"`
}
