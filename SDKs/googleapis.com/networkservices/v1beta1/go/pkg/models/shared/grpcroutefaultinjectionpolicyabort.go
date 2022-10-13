package shared

type GrpcRouteFaultInjectionPolicyAbort struct {
	HTTPStatus *int32 `json:"httpStatus"`
	Percentage *int32 `json:"percentage"`
}
