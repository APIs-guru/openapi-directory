package shared

type ReturnPolicyOnlineReturnShippingFeeTypeEnum string

const (
	ReturnPolicyOnlineReturnShippingFeeTypeEnumTypeUnspecified         ReturnPolicyOnlineReturnShippingFeeTypeEnum = "TYPE_UNSPECIFIED"
	ReturnPolicyOnlineReturnShippingFeeTypeEnumFixed                   ReturnPolicyOnlineReturnShippingFeeTypeEnum = "FIXED"
	ReturnPolicyOnlineReturnShippingFeeTypeEnumCustomerPayingActualFee ReturnPolicyOnlineReturnShippingFeeTypeEnum = "CUSTOMER_PAYING_ACTUAL_FEE"
)

type ReturnPolicyOnlineReturnShippingFee struct {
	FixedFee *PriceAmount                                 `json:"fixedFee,omitempty"`
	Type     *ReturnPolicyOnlineReturnShippingFeeTypeEnum `json:"type,omitempty"`
}
