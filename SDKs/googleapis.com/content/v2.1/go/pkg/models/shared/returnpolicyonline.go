package shared

type ReturnPolicyOnlineItemConditionsEnum string

const (
	ReturnPolicyOnlineItemConditionsEnumItemConditionUnspecified ReturnPolicyOnlineItemConditionsEnum = "ITEM_CONDITION_UNSPECIFIED"
	ReturnPolicyOnlineItemConditionsEnumNew                      ReturnPolicyOnlineItemConditionsEnum = "NEW"
	ReturnPolicyOnlineItemConditionsEnumUsed                     ReturnPolicyOnlineItemConditionsEnum = "USED"
)

type ReturnPolicyOnlineReturnMethodsEnum string

const (
	ReturnPolicyOnlineReturnMethodsEnumReturnMethodUnspecified ReturnPolicyOnlineReturnMethodsEnum = "RETURN_METHOD_UNSPECIFIED"
	ReturnPolicyOnlineReturnMethodsEnumByMail                  ReturnPolicyOnlineReturnMethodsEnum = "BY_MAIL"
	ReturnPolicyOnlineReturnMethodsEnumInStore                 ReturnPolicyOnlineReturnMethodsEnum = "IN_STORE"
	ReturnPolicyOnlineReturnMethodsEnumAtAKiosk                ReturnPolicyOnlineReturnMethodsEnum = "AT_A_KIOSK"
)

type ReturnPolicyOnline struct {
	Countries                []string                                     `json:"countries"`
	ItemConditions           []ReturnPolicyOnlineItemConditionsEnum       `json:"itemConditions"`
	Label                    *string                                      `json:"label"`
	Name                     *string                                      `json:"name"`
	Policy                   *ReturnPolicyOnlinePolicy                    `json:"policy"`
	RestockingFee            *ReturnPolicyOnlineRestockingFee             `json:"restockingFee"`
	ReturnMethods            []ReturnPolicyOnlineReturnMethodsEnum        `json:"returnMethods"`
	ReturnPolicyID           *string                                      `json:"returnPolicyId"`
	ReturnPolicyURI          *string                                      `json:"returnPolicyUri"`
	ReturnReasonCategoryInfo []ReturnPolicyOnlineReturnReasonCategoryInfo `json:"returnReasonCategoryInfo"`
}
