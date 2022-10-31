package shared



type AccountsAuthInfoResponse struct {
    AccountIdentifiers []AccountIdentifier `json:"accountIdentifiers,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

