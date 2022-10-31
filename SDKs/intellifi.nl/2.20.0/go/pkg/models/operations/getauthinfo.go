package operations




type GetAuthinfo200ApplicationJSONAuthMethodEnum string

const (
    GetAuthinfo200ApplicationJSONAuthMethodEnumUserSession GetAuthinfo200ApplicationJSONAuthMethodEnum = "user_session"
GetAuthinfo200ApplicationJSONAuthMethodEnumInternal GetAuthinfo200ApplicationJSONAuthMethodEnum = "internal"
GetAuthinfo200ApplicationJSONAuthMethodEnumStaticAPIKey GetAuthinfo200ApplicationJSONAuthMethodEnum = "static_api_key"
)


type GetAuthinfo200ApplicationJSONPermissions struct {
    Mutate *bool `json:"mutate,omitempty"`
    
}

type GetAuthinfo200ApplicationJSON struct {
    APIKeyID *string `json:"api_key_id,omitempty"`
    AuthMethod *GetAuthinfo200ApplicationJSONAuthMethodEnum `json:"auth_method,omitempty"`
    Authenticated *bool `json:"authenticated,omitempty"`
    Permissions *GetAuthinfo200ApplicationJSONPermissions `json:"permissions,omitempty"`
    URL *string `json:"url,omitempty"`
    UserID *string `json:"user_id,omitempty"`
    
}

type GetAuthinfoResponse struct {
    ContentType string 
    StatusCode int64 
    GetAuthinfo200ApplicationJSONObject *GetAuthinfo200ApplicationJSON 
    
}

