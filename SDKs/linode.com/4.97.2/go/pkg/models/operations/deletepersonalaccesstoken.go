package operations

import (
"openapi/pkg/models/shared")

type DeletePersonalAccessTokenPathParams struct {
    TokenID int64 `pathParam:"style=simple,explode=false,name=tokenId"`
    
}

type DeletePersonalAccessTokenSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeletePersonalAccessTokenSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeletePersonalAccessTokenSecurity struct {
    Option1 *DeletePersonalAccessTokenSecurityOption1 `security:"option"`
    Option2 *DeletePersonalAccessTokenSecurityOption2 `security:"option"`
    
}

type DeletePersonalAccessTokenRequest struct {
    PathParams DeletePersonalAccessTokenPathParams 
    Security DeletePersonalAccessTokenSecurity 
    
}

type DeletePersonalAccessTokenDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeletePersonalAccessTokenResponse struct {
    ContentType string 
    StatusCode int64 
    DeletePersonalAccessToken200ApplicationJSONObject map[string]interface{} 
    DeletePersonalAccessTokenDefaultApplicationJSONObject *DeletePersonalAccessTokenDefaultApplicationJSON 
    
}

