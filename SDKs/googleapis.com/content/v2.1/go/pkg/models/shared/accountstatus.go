package shared



type AccountStatus struct {
    AccountID *string `json:"accountId,omitempty"`
    AccountLevelIssues []AccountStatusAccountLevelIssue `json:"accountLevelIssues,omitempty"`
    AccountManagement *string `json:"accountManagement,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Products []AccountStatusProducts `json:"products,omitempty"`
    WebsiteClaimed *bool `json:"websiteClaimed,omitempty"`
    
}

