package shared



type HeldAccount struct {
    AccountID *string `json:"accountId,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    HoldTime *string `json:"holdTime,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    
}

