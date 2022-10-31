package shared



type AccountBusinessInformation struct {
    Address *AccountAddress `json:"address,omitempty"`
    CustomerService *AccountCustomerService `json:"customerService,omitempty"`
    KoreanBusinessRegistrationNumber *string `json:"koreanBusinessRegistrationNumber,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    PhoneVerificationStatus *string `json:"phoneVerificationStatus,omitempty"`
    
}

