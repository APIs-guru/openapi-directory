package operations

import (
"openapi/pkg/models/shared")

type DrivePermissionsGetPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    PermissionID string `pathParam:"style=simple,explode=false,name=permissionId"`
    
}

type DrivePermissionsGetQueryParams struct {
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

type DrivePermissionsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetSecurity struct {
    Option1 *DrivePermissionsGetSecurityOption1 `security:"option"`
    Option2 *DrivePermissionsGetSecurityOption2 `security:"option"`
    Option3 *DrivePermissionsGetSecurityOption3 `security:"option"`
    Option4 *DrivePermissionsGetSecurityOption4 `security:"option"`
    Option5 *DrivePermissionsGetSecurityOption5 `security:"option"`
    Option6 *DrivePermissionsGetSecurityOption6 `security:"option"`
    
}

type DrivePermissionsGetRequest struct {
    PathParams DrivePermissionsGetPathParams 
    QueryParams DrivePermissionsGetQueryParams 
    Security DrivePermissionsGetSecurity 
    
}

type DrivePermissionsGetResponse struct {
    ContentType string 
    Permission *shared.Permission 
    StatusCode int64 
    
}

