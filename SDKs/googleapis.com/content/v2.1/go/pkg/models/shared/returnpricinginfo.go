package shared



type ReturnPricingInfo struct {
    ChargeReturnShippingFee *bool `json:"chargeReturnShippingFee,omitempty"`
    MaxReturnShippingFee *MonetaryAmount `json:"maxReturnShippingFee,omitempty"`
    RefundableItemsTotalAmount *MonetaryAmount `json:"refundableItemsTotalAmount,omitempty"`
    RefundableShippingAmount *MonetaryAmount `json:"refundableShippingAmount,omitempty"`
    TotalRefundedAmount *MonetaryAmount `json:"totalRefundedAmount,omitempty"`
    
}

