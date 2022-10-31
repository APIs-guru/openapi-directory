package operations

import (
"openapi/pkg/models/shared")

type GetVolumesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetVolumesSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetVolumesSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetVolumesSecurity struct {
    Option1 *GetVolumesSecurityOption1 `security:"option"`
    Option2 *GetVolumesSecurityOption2 `security:"option"`
    
}

type GetVolumesRequest struct {
    QueryParams GetVolumesQueryParams 
    Security GetVolumesSecurity 
    
}

type GetVolumes200ApplicationJSON struct {
    Data []shared.Volume `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetVolumesDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetVolumesResponse struct {
    ContentType string 
    StatusCode int64 
    GetVolumes200ApplicationJSONObject *GetVolumes200ApplicationJSON 
    GetVolumesDefaultApplicationJSONObject *GetVolumesDefaultApplicationJSON 
    
}

