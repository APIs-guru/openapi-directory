package operations

import (
"openapi/pkg/models/shared")

type UpdateDomainPathParams struct {
    DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
    
}

type UpdateDomainSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateDomainSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateDomainSecurity struct {
    Option1 *UpdateDomainSecurityOption1 `security:"option"`
    Option2 *UpdateDomainSecurityOption2 `security:"option"`
    
}

type UpdateDomainRequest struct {
    PathParams UpdateDomainPathParams 
    Request shared.Domain `request:"mediaType=application/json"`
    Security UpdateDomainSecurity 
    
}

type UpdateDomainDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateDomainResponse struct {
    ContentType string 
    Domain *shared.Domain 
    StatusCode int64 
    UpdateDomainDefaultApplicationJSONObject *UpdateDomainDefaultApplicationJSON 
    
}

