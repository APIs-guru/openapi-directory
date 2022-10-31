package shared



type BasicAuthentication struct {
    Password *string `json:"password,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

