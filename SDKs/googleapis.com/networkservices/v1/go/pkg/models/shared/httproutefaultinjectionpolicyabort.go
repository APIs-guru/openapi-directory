package shared

type HTTPRouteFaultInjectionPolicyAbort struct {
	HTTPStatus *int32 `json:"httpStatus"`
	Percentage *int32 `json:"percentage"`
}
