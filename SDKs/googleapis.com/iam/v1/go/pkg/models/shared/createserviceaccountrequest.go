package shared



type CreateServiceAccountRequest struct {
    AccountID *string `json:"accountId,omitempty"`
    ServiceAccount *ServiceAccount `json:"serviceAccount,omitempty"`
    
}

