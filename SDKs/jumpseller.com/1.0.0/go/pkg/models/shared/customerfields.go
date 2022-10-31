package shared

type CustomerFieldsStatusEnum string

const (
	CustomerFieldsStatusEnumApproved CustomerFieldsStatusEnum = "approved"
	CustomerFieldsStatusEnumPending  CustomerFieldsStatusEnum = "pending"
	CustomerFieldsStatusEnumDisabled CustomerFieldsStatusEnum = "disabled"
)

type CustomerFields struct {
	BillingAddress           *interface{}              `json:"billing_address,omitempty"`
	CustomerAdditionalFields []CustomerAdditionalField `json:"customer_additional_fields,omitempty"`
	CustomerCategories       []CustomerCategory        `json:"customer_categories,omitempty"`
	Email                    *string                   `json:"email,omitempty"`
	ID                       *int32                    `json:"id,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	Phone                    *string                   `json:"phone,omitempty"`
	ShippingAddress          *interface{}              `json:"shipping_address,omitempty"`
	Status                   *CustomerFieldsStatusEnum `json:"status,omitempty"`
	Surname                  *string                   `json:"surname,omitempty"`
}
