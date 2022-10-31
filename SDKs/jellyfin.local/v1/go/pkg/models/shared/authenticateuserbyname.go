package shared



type AuthenticateUserByName struct {
    Password *string `json:"Password,omitempty"`
    Pw *string `json:"Pw,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

