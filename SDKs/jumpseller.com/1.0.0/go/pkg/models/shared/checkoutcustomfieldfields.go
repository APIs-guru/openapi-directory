package shared




type CheckoutCustomFieldFieldsAreaEnum string

const (
    CheckoutCustomFieldFieldsAreaEnumContact CheckoutCustomFieldFieldsAreaEnum = "contact"
CheckoutCustomFieldFieldsAreaEnumBillingShipping CheckoutCustomFieldFieldsAreaEnum = "billing_shipping"
CheckoutCustomFieldFieldsAreaEnumOther CheckoutCustomFieldFieldsAreaEnum = "other"
)



type CheckoutCustomFieldFieldsTypeEnum string

const (
    CheckoutCustomFieldFieldsTypeEnumText CheckoutCustomFieldFieldsTypeEnum = "text"
CheckoutCustomFieldFieldsTypeEnumSelect CheckoutCustomFieldFieldsTypeEnum = "select"
CheckoutCustomFieldFieldsTypeEnumInput CheckoutCustomFieldFieldsTypeEnum = "input"
CheckoutCustomFieldFieldsTypeEnumCheckbox CheckoutCustomFieldFieldsTypeEnum = "checkbox"
)


type CheckoutCustomFieldFields struct {
    Area *CheckoutCustomFieldFieldsAreaEnum `json:"area,omitempty"`
    CustomFieldSelectOptions []string `json:"custom_field_select_options,omitempty"`
    Deletable *bool `json:"deletable,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Position *int32 `json:"position,omitempty"`
    Required *bool `json:"required,omitempty"`
    Type *CheckoutCustomFieldFieldsTypeEnum `json:"type,omitempty"`
    
}

