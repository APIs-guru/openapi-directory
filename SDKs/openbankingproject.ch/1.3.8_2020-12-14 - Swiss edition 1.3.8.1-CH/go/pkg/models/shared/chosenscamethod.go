package shared



type ChosenScaMethod struct {
    AuthenticationMethodID string `json:"authenticationMethodId"`
    AuthenticationType AuthenticationTypeEnum `json:"authenticationType"`
    AuthenticationVersion *string `json:"authenticationVersion,omitempty"`
    Explanation *string `json:"explanation,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

