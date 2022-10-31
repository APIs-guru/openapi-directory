package operations

import (
"openapi/pkg/models/shared")

type CloneLinodeInstancePathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type CloneLinodeInstanceRequestBody struct {
    BackupsEnabled *bool `json:"backups_enabled,omitempty"`
    Configs []int64 `json:"configs,omitempty"`
    Disks []int64 `json:"disks,omitempty"`
    Group *string `json:"group,omitempty"`
    Label *string `json:"label,omitempty"`
    LinodeID *int64 `json:"linode_id,omitempty"`
    Region string `json:"region"`
    Type string `json:"type"`
    
}

type CloneLinodeInstanceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CloneLinodeInstanceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CloneLinodeInstanceSecurity struct {
    Option1 *CloneLinodeInstanceSecurityOption1 `security:"option"`
    Option2 *CloneLinodeInstanceSecurityOption2 `security:"option"`
    
}

type CloneLinodeInstanceRequest struct {
    PathParams CloneLinodeInstancePathParams 
    Request CloneLinodeInstanceRequestBody `request:"mediaType=application/json"`
    Security CloneLinodeInstanceSecurity 
    
}

type CloneLinodeInstanceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CloneLinodeInstanceResponse struct {
    ContentType string 
    Linode *shared.Linode 
    StatusCode int64 
    CloneLinodeInstanceDefaultApplicationJSONObject *CloneLinodeInstanceDefaultApplicationJSON 
    
}

