package operations

import (
"openapi/pkg/models/shared")

type CloneLinodeDiskPathParams struct {
    DiskID int64 `pathParam:"style=simple,explode=false,name=diskId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type CloneLinodeDiskSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CloneLinodeDiskSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CloneLinodeDiskSecurity struct {
    Option1 *CloneLinodeDiskSecurityOption1 `security:"option"`
    Option2 *CloneLinodeDiskSecurityOption2 `security:"option"`
    
}

type CloneLinodeDiskRequest struct {
    PathParams CloneLinodeDiskPathParams 
    Security CloneLinodeDiskSecurity 
    
}

type CloneLinodeDiskDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CloneLinodeDiskResponse struct {
    ContentType string 
    Disk *shared.Disk 
    StatusCode int64 
    CloneLinodeDiskDefaultApplicationJSONObject *CloneLinodeDiskDefaultApplicationJSON 
    
}

