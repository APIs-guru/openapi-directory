package shared

type OrderLineItemShippingDetailsMethod struct {
	Carrier          *string `json:"carrier"`
	MaxDaysInTransit *int64  `json:"maxDaysInTransit"`
	MethodName       *string `json:"methodName"`
	MinDaysInTransit *int64  `json:"minDaysInTransit"`
}
