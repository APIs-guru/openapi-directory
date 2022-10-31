package shared

type ReturnPolicyOnlinePolicyTypeEnum string

const (
	ReturnPolicyOnlinePolicyTypeEnumTypeUnspecified           ReturnPolicyOnlinePolicyTypeEnum = "TYPE_UNSPECIFIED"
	ReturnPolicyOnlinePolicyTypeEnumNumberOfDaysAfterDelivery ReturnPolicyOnlinePolicyTypeEnum = "NUMBER_OF_DAYS_AFTER_DELIVERY"
	ReturnPolicyOnlinePolicyTypeEnumNoReturns                 ReturnPolicyOnlinePolicyTypeEnum = "NO_RETURNS"
	ReturnPolicyOnlinePolicyTypeEnumLifetimeReturns           ReturnPolicyOnlinePolicyTypeEnum = "LIFETIME_RETURNS"
)

type ReturnPolicyOnlinePolicy struct {
	Days *string                           `json:"days,omitempty"`
	Type *ReturnPolicyOnlinePolicyTypeEnum `json:"type,omitempty"`
}
