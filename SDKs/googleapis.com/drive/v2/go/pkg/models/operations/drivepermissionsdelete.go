package operations

import (
"openapi/pkg/models/shared")

type DrivePermissionsDeletePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    PermissionID string `pathParam:"style=simple,explode=false,name=permissionId"`
    
}

type DrivePermissionsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    UseDomainAdminAccess *bool `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DrivePermissionsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsDeleteSecurity struct {
    Option1 *DrivePermissionsDeleteSecurityOption1 `security:"option"`
    Option2 *DrivePermissionsDeleteSecurityOption2 `security:"option"`
    
}

type DrivePermissionsDeleteRequest struct {
    PathParams DrivePermissionsDeletePathParams 
    QueryParams DrivePermissionsDeleteQueryParams 
    Security DrivePermissionsDeleteSecurity 
    
}

type DrivePermissionsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

