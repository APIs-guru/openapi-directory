package shared



type UserSessionRepresentation struct {
    Clients map[string]interface{} `json:"clients,omitempty"`
    ID *string `json:"id,omitempty"`
    IPAddress *string `json:"ipAddress,omitempty"`
    LastAccess *int64 `json:"lastAccess,omitempty"`
    Start *int64 `json:"start,omitempty"`
    UserID *string `json:"userId,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

