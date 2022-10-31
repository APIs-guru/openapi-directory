package shared



type AuthResult struct {
    AccessToken *string `json:"accessToken,omitempty"`
    RegistrierkasseUUID *string `json:"registrierkasseUuid,omitempty"`
    
}

