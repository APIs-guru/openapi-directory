package operations

import (
"openapi/pkg/models/shared")

type UpdateUserGrantsPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type UpdateUserGrantsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateUserGrantsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateUserGrantsSecurity struct {
    Option1 *UpdateUserGrantsSecurityOption1 `security:"option"`
    Option2 *UpdateUserGrantsSecurityOption2 `security:"option"`
    
}

type UpdateUserGrantsRequest struct {
    PathParams UpdateUserGrantsPathParams 
    Request shared.GrantsResponse `request:"mediaType=application/json"`
    Security UpdateUserGrantsSecurity 
    
}

type UpdateUserGrantsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateUserGrantsResponse struct {
    ContentType string 
    GrantsResponse *shared.GrantsResponse 
    StatusCode int64 
    UpdateUserGrantsDefaultApplicationJSONObject *UpdateUserGrantsDefaultApplicationJSON 
    
}

