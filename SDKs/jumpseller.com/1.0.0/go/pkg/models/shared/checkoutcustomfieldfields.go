package shared

type CheckoutCustomFieldFieldsAreaEnum string

const (
	CheckoutCustomFieldFieldsAreaEnumContact         CheckoutCustomFieldFieldsAreaEnum = "contact"
	CheckoutCustomFieldFieldsAreaEnumBillingShipping CheckoutCustomFieldFieldsAreaEnum = "billing_shipping"
	CheckoutCustomFieldFieldsAreaEnumOther           CheckoutCustomFieldFieldsAreaEnum = "other"
)

type CheckoutCustomFieldFieldsTypeEnum string

const (
	CheckoutCustomFieldFieldsTypeEnumText     CheckoutCustomFieldFieldsTypeEnum = "text"
	CheckoutCustomFieldFieldsTypeEnumSelect   CheckoutCustomFieldFieldsTypeEnum = "select"
	CheckoutCustomFieldFieldsTypeEnumInput    CheckoutCustomFieldFieldsTypeEnum = "input"
	CheckoutCustomFieldFieldsTypeEnumCheckbox CheckoutCustomFieldFieldsTypeEnum = "checkbox"
)

type CheckoutCustomFieldFields struct {
	Area                     *CheckoutCustomFieldFieldsAreaEnum `json:"area"`
	CustomFieldSelectOptions []string                           `json:"custom_field_select_options"`
	Deletable                *bool                              `json:"deletable"`
	ID                       *int32                             `json:"id"`
	Label                    *string                            `json:"label"`
	Position                 *int32                             `json:"position"`
	Required                 *bool                              `json:"required"`
	Type                     *CheckoutCustomFieldFieldsTypeEnum `json:"type"`
}
