package shared

type AccountBusinessInformation struct {
	Address                          *AccountAddress         `json:"address"`
	CustomerService                  *AccountCustomerService `json:"customerService"`
	KoreanBusinessRegistrationNumber *string                 `json:"koreanBusinessRegistrationNumber"`
	PhoneNumber                      *string                 `json:"phoneNumber"`
}
