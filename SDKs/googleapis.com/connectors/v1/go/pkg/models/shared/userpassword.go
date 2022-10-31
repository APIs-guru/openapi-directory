package shared



type UserPassword struct {
    Password *Secret `json:"password,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

