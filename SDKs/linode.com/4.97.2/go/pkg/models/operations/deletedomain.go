package operations

import (
"openapi/pkg/models/shared")

type DeleteDomainPathParams struct {
    DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
    
}

type DeleteDomainSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteDomainSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteDomainSecurity struct {
    Option1 *DeleteDomainSecurityOption1 `security:"option"`
    Option2 *DeleteDomainSecurityOption2 `security:"option"`
    
}

type DeleteDomainRequest struct {
    PathParams DeleteDomainPathParams 
    Security DeleteDomainSecurity 
    
}

type DeleteDomainDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteDomainResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteDomain200ApplicationJSONObject map[string]interface{} 
    DeleteDomainDefaultApplicationJSONObject *DeleteDomainDefaultApplicationJSON 
    
}

