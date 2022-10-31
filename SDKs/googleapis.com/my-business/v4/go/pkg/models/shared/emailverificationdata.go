package shared



type EmailVerificationData struct {
    DomainName *string `json:"domainName,omitempty"`
    IsUserNameEditable *bool `json:"isUserNameEditable,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

