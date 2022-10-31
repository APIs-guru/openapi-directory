package shared



type Account struct {
    AuthTokens []AuthToken `json:"authTokens,omitempty"`
    Features []string `json:"features,omitempty"`
    Password *string `json:"password,omitempty"`
    UserData []UserData `json:"userData,omitempty"`
    
}

