package shared

type AccountCustomerService struct {
	Email       *string `json:"email"`
	PhoneNumber *string `json:"phoneNumber"`
	URL         *string `json:"url"`
}
