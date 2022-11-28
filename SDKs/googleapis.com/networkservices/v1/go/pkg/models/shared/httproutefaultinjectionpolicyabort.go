package shared

// HTTPRouteFaultInjectionPolicyAbort
// Specification of how client requests are aborted as part of fault injection before being sent to a destination.
type HTTPRouteFaultInjectionPolicyAbort struct {
	HTTPStatus *int32 `json:"httpStatus,omitempty"`
	Percentage *int32 `json:"percentage,omitempty"`
}
