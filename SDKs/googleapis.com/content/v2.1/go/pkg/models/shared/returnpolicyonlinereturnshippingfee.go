package shared

type ReturnPolicyOnlineReturnShippingFeeTypeEnum string

const (
	ReturnPolicyOnlineReturnShippingFeeTypeEnumTypeUnspecified         ReturnPolicyOnlineReturnShippingFeeTypeEnum = "TYPE_UNSPECIFIED"
	ReturnPolicyOnlineReturnShippingFeeTypeEnumFixed                   ReturnPolicyOnlineReturnShippingFeeTypeEnum = "FIXED"
	ReturnPolicyOnlineReturnShippingFeeTypeEnumCustomerPayingActualFee ReturnPolicyOnlineReturnShippingFeeTypeEnum = "CUSTOMER_PAYING_ACTUAL_FEE"
)

// ReturnPolicyOnlineReturnShippingFee
// The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
type ReturnPolicyOnlineReturnShippingFee struct {
	FixedFee *PriceAmount                                 `json:"fixedFee,omitempty"`
	Type     *ReturnPolicyOnlineReturnShippingFeeTypeEnum `json:"type,omitempty"`
}
