package operations

import (
"openapi/pkg/models/shared")

type GetVolumePathParams struct {
    VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type GetVolumeQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetVolumeSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetVolumeSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetVolumeSecurity struct {
    Option1 *GetVolumeSecurityOption1 `security:"option"`
    Option2 *GetVolumeSecurityOption2 `security:"option"`
    
}

type GetVolumeRequest struct {
    PathParams GetVolumePathParams 
    QueryParams GetVolumeQueryParams 
    Security GetVolumeSecurity 
    
}

type GetVolumeDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetVolumeResponse struct {
    ContentType string 
    StatusCode int64 
    Volume *shared.Volume 
    GetVolumeDefaultApplicationJSONObject *GetVolumeDefaultApplicationJSON 
    
}

