package shared

type CustomerFieldsStatusEnum string

const (
	CustomerFieldsStatusEnumApproved CustomerFieldsStatusEnum = "approved"
	CustomerFieldsStatusEnumPending  CustomerFieldsStatusEnum = "pending"
	CustomerFieldsStatusEnumDisabled CustomerFieldsStatusEnum = "disabled"
)

type CustomerFields struct {
	BillingAddress           *interface{}              `json:"billing_address"`
	CustomerAdditionalFields []CustomerAdditionalField `json:"customer_additional_fields"`
	CustomerCategories       []CustomerCategory        `json:"customer_categories"`
	Email                    *string                   `json:"email"`
	ID                       *int32                    `json:"id"`
	Name                     *string                   `json:"name"`
	Phone                    *string                   `json:"phone"`
	ShippingAddress          *interface{}              `json:"shipping_address"`
	Status                   *CustomerFieldsStatusEnum `json:"status"`
	Surname                  *string                   `json:"surname"`
}
