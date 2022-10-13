package shared

type CheckoutCustomFieldEditFieldsAreaEnum string

const (
	CheckoutCustomFieldEditFieldsAreaEnumContact         CheckoutCustomFieldEditFieldsAreaEnum = "contact"
	CheckoutCustomFieldEditFieldsAreaEnumBillingShipping CheckoutCustomFieldEditFieldsAreaEnum = "billing_shipping"
	CheckoutCustomFieldEditFieldsAreaEnumOther           CheckoutCustomFieldEditFieldsAreaEnum = "other"
)

type CheckoutCustomFieldEditFieldsTypeEnum string

const (
	CheckoutCustomFieldEditFieldsTypeEnumText     CheckoutCustomFieldEditFieldsTypeEnum = "text"
	CheckoutCustomFieldEditFieldsTypeEnumSelect   CheckoutCustomFieldEditFieldsTypeEnum = "select"
	CheckoutCustomFieldEditFieldsTypeEnumInput    CheckoutCustomFieldEditFieldsTypeEnum = "input"
	CheckoutCustomFieldEditFieldsTypeEnumCheckbox CheckoutCustomFieldEditFieldsTypeEnum = "checkbox"
	CheckoutCustomFieldEditFieldsTypeEnumDate     CheckoutCustomFieldEditFieldsTypeEnum = "date"
)

type CheckoutCustomFieldEditFields struct {
	Area                     *CheckoutCustomFieldEditFieldsAreaEnum `json:"area"`
	CustomFieldSelectOptions []string                               `json:"custom_field_select_options"`
	Deletable                *bool                                  `json:"deletable"`
	Label                    *string                                `json:"label"`
	Position                 *int32                                 `json:"position"`
	Required                 *bool                                  `json:"required"`
	Type                     *CheckoutCustomFieldEditFieldsTypeEnum `json:"type"`
}
