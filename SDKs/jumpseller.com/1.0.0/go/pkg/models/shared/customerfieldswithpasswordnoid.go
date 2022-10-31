package shared




type CustomerFieldsWithPasswordNoIDStatusEnum string

const (
    CustomerFieldsWithPasswordNoIDStatusEnumApproved CustomerFieldsWithPasswordNoIDStatusEnum = "approved"
CustomerFieldsWithPasswordNoIDStatusEnumPending CustomerFieldsWithPasswordNoIDStatusEnum = "pending"
CustomerFieldsWithPasswordNoIDStatusEnumDisabled CustomerFieldsWithPasswordNoIDStatusEnum = "disabled"
)


type CustomerFieldsWithPasswordNoID struct {
    BillingAddress *interface{} `json:"billing_address,omitempty"`
    CustomerCategory []int64 `json:"customer_category,omitempty"`
    Email *string `json:"email,omitempty"`
    Password *string `json:"password,omitempty"`
    Phone *string `json:"phone,omitempty"`
    ShippingAddress *interface{} `json:"shipping_address,omitempty"`
    Status *CustomerFieldsWithPasswordNoIDStatusEnum `json:"status,omitempty"`
    
}

