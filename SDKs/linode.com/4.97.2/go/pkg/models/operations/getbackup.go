package operations

import (
"openapi/pkg/models/shared")

type GetBackupPathParams struct {
    BackupID int64 `pathParam:"style=simple,explode=false,name=backupId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type GetBackupSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetBackupSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetBackupSecurity struct {
    Option1 *GetBackupSecurityOption1 `security:"option"`
    Option2 *GetBackupSecurityOption2 `security:"option"`
    
}

type GetBackupRequest struct {
    PathParams GetBackupPathParams 
    Security GetBackupSecurity 
    
}

type GetBackupDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetBackupResponse struct {
    Backup *shared.Backup 
    ContentType string 
    StatusCode int64 
    GetBackupDefaultApplicationJSONObject *GetBackupDefaultApplicationJSON 
    
}

