package operations

import (
"openapi/pkg/models/shared")

type GetManagedContactPathParams struct {
    ContactID int64 `pathParam:"style=simple,explode=false,name=contactId"`
    
}

type GetManagedContactSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetManagedContactSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetManagedContactSecurity struct {
    Option1 *GetManagedContactSecurityOption1 `security:"option"`
    Option2 *GetManagedContactSecurityOption2 `security:"option"`
    
}

type GetManagedContactRequest struct {
    PathParams GetManagedContactPathParams 
    Security GetManagedContactSecurity 
    
}

type GetManagedContactDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetManagedContactResponse struct {
    ContentType string 
    ManagedContact *shared.ManagedContact 
    StatusCode int64 
    GetManagedContactDefaultApplicationJSONObject *GetManagedContactDefaultApplicationJSON 
    
}

