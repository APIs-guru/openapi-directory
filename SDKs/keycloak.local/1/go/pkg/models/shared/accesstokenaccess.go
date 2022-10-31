package shared



type AccessTokenAccess struct {
    Roles []string `json:"roles,omitempty"`
    VerifyCaller *bool `json:"verify_caller,omitempty"`
    
}

