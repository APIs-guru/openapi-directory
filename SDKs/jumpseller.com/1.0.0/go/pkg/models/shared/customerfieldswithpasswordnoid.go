package shared

type CustomerFieldsWithPasswordNoIDStatusEnum string

const (
	CustomerFieldsWithPasswordNoIDStatusEnumApproved CustomerFieldsWithPasswordNoIDStatusEnum = "approved"
	CustomerFieldsWithPasswordNoIDStatusEnumPending  CustomerFieldsWithPasswordNoIDStatusEnum = "pending"
	CustomerFieldsWithPasswordNoIDStatusEnumDisabled CustomerFieldsWithPasswordNoIDStatusEnum = "disabled"
)

type CustomerFieldsWithPasswordNoID struct {
	BillingAddress   *interface{}                              `json:"billing_address"`
	CustomerCategory []int64                                   `json:"customer_category"`
	Email            *string                                   `json:"email"`
	Password         *string                                   `json:"password"`
	Phone            *string                                   `json:"phone"`
	ShippingAddress  *interface{}                              `json:"shipping_address"`
	Status           *CustomerFieldsWithPasswordNoIDStatusEnum `json:"status"`
}
