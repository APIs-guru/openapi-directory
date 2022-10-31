package shared

type AccountCustomerService struct {
	Email       *string `json:"email,omitempty"`
	PhoneNumber *string `json:"phoneNumber,omitempty"`
	URL         *string `json:"url,omitempty"`
}
