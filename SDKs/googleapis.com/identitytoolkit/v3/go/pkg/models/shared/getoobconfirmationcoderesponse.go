package shared



type GetOobConfirmationCodeResponse struct {
    Email *string `json:"email,omitempty"`
    Kind *string `json:"kind,omitempty"`
    OobCode *string `json:"oobCode,omitempty"`
    
}

