package operations

import (
"openapi/pkg/models/shared")

type ImportDomainSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type ImportDomainSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ImportDomainSecurity struct {
    Option1 *ImportDomainSecurityOption1 `security:"option"`
    Option2 *ImportDomainSecurityOption2 `security:"option"`
    
}

type ImportDomainRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security ImportDomainSecurity 
    
}

type ImportDomainDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type ImportDomainResponse struct {
    ContentType string 
    Domain *shared.Domain 
    StatusCode int64 
    ImportDomainDefaultApplicationJSONObject *ImportDomainDefaultApplicationJSON 
    
}

