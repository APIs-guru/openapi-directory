package shared

type ReturnPricingInfo struct {
	ChargeReturnShippingFee    *bool           `json:"chargeReturnShippingFee"`
	MaxReturnShippingFee       *MonetaryAmount `json:"maxReturnShippingFee"`
	RefundableItemsTotalAmount *MonetaryAmount `json:"refundableItemsTotalAmount"`
	RefundableShippingAmount   *MonetaryAmount `json:"refundableShippingAmount"`
	TotalRefundedAmount        *MonetaryAmount `json:"totalRefundedAmount"`
}
