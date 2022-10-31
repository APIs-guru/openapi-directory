package shared




type ReturnPolicyOnlineItemConditionsEnum string

const (
    ReturnPolicyOnlineItemConditionsEnumItemConditionUnspecified ReturnPolicyOnlineItemConditionsEnum = "ITEM_CONDITION_UNSPECIFIED"
ReturnPolicyOnlineItemConditionsEnumNew ReturnPolicyOnlineItemConditionsEnum = "NEW"
ReturnPolicyOnlineItemConditionsEnumUsed ReturnPolicyOnlineItemConditionsEnum = "USED"
)



type ReturnPolicyOnlineReturnMethodsEnum string

const (
    ReturnPolicyOnlineReturnMethodsEnumReturnMethodUnspecified ReturnPolicyOnlineReturnMethodsEnum = "RETURN_METHOD_UNSPECIFIED"
ReturnPolicyOnlineReturnMethodsEnumByMail ReturnPolicyOnlineReturnMethodsEnum = "BY_MAIL"
ReturnPolicyOnlineReturnMethodsEnumInStore ReturnPolicyOnlineReturnMethodsEnum = "IN_STORE"
ReturnPolicyOnlineReturnMethodsEnumAtAKiosk ReturnPolicyOnlineReturnMethodsEnum = "AT_A_KIOSK"
)


type ReturnPolicyOnline struct {
    Countries []string `json:"countries,omitempty"`
    ItemConditions []ReturnPolicyOnlineItemConditionsEnum `json:"itemConditions,omitempty"`
    Label *string `json:"label,omitempty"`
    Name *string `json:"name,omitempty"`
    Policy *ReturnPolicyOnlinePolicy `json:"policy,omitempty"`
    RestockingFee *ReturnPolicyOnlineRestockingFee `json:"restockingFee,omitempty"`
    ReturnMethods []ReturnPolicyOnlineReturnMethodsEnum `json:"returnMethods,omitempty"`
    ReturnPolicyID *string `json:"returnPolicyId,omitempty"`
    ReturnPolicyURI *string `json:"returnPolicyUri,omitempty"`
    ReturnReasonCategoryInfo []ReturnPolicyOnlineReturnReasonCategoryInfo `json:"returnReasonCategoryInfo,omitempty"`
    
}

