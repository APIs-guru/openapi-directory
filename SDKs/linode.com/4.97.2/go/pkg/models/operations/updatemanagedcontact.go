package operations

import (
"openapi/pkg/models/shared")

type UpdateManagedContactPathParams struct {
    ContactID int64 `pathParam:"style=simple,explode=false,name=contactId"`
    
}

type UpdateManagedContactSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateManagedContactSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateManagedContactSecurity struct {
    Option1 *UpdateManagedContactSecurityOption1 `security:"option"`
    Option2 *UpdateManagedContactSecurityOption2 `security:"option"`
    
}

type UpdateManagedContactRequest struct {
    PathParams UpdateManagedContactPathParams 
    Request shared.ManagedContact `request:"mediaType=application/json"`
    Security UpdateManagedContactSecurity 
    
}

type UpdateManagedContactDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateManagedContactResponse struct {
    ContentType string 
    ManagedContact *shared.ManagedContact 
    StatusCode int64 
    UpdateManagedContactDefaultApplicationJSONObject *UpdateManagedContactDefaultApplicationJSON 
    
}

