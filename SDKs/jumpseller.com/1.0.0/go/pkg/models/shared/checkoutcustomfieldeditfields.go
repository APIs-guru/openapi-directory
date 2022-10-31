package shared




type CheckoutCustomFieldEditFieldsAreaEnum string

const (
    CheckoutCustomFieldEditFieldsAreaEnumContact CheckoutCustomFieldEditFieldsAreaEnum = "contact"
CheckoutCustomFieldEditFieldsAreaEnumBillingShipping CheckoutCustomFieldEditFieldsAreaEnum = "billing_shipping"
CheckoutCustomFieldEditFieldsAreaEnumOther CheckoutCustomFieldEditFieldsAreaEnum = "other"
)



type CheckoutCustomFieldEditFieldsTypeEnum string

const (
    CheckoutCustomFieldEditFieldsTypeEnumText CheckoutCustomFieldEditFieldsTypeEnum = "text"
CheckoutCustomFieldEditFieldsTypeEnumSelect CheckoutCustomFieldEditFieldsTypeEnum = "select"
CheckoutCustomFieldEditFieldsTypeEnumInput CheckoutCustomFieldEditFieldsTypeEnum = "input"
CheckoutCustomFieldEditFieldsTypeEnumCheckbox CheckoutCustomFieldEditFieldsTypeEnum = "checkbox"
CheckoutCustomFieldEditFieldsTypeEnumDate CheckoutCustomFieldEditFieldsTypeEnum = "date"
)


type CheckoutCustomFieldEditFields struct {
    Area *CheckoutCustomFieldEditFieldsAreaEnum `json:"area,omitempty"`
    CustomFieldSelectOptions []string `json:"custom_field_select_options,omitempty"`
    Deletable *bool `json:"deletable,omitempty"`
    Label *string `json:"label,omitempty"`
    Position *int32 `json:"position,omitempty"`
    Required *bool `json:"required,omitempty"`
    Type *CheckoutCustomFieldEditFieldsTypeEnum `json:"type,omitempty"`
    
}

