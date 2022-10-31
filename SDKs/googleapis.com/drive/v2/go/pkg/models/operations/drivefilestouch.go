package operations

import (
"openapi/pkg/models/shared")

type DriveFilesTouchPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveFilesTouchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeLabels *string `queryParam:"style=form,explode=true,name=includeLabels"`
    IncludePermissionsForView *string `queryParam:"style=form,explode=true,name=includePermissionsForView"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveFilesTouchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTouchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTouchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTouchSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTouchSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTouchSecurity struct {
    Option1 *DriveFilesTouchSecurityOption1 `security:"option"`
    Option2 *DriveFilesTouchSecurityOption2 `security:"option"`
    Option3 *DriveFilesTouchSecurityOption3 `security:"option"`
    Option4 *DriveFilesTouchSecurityOption4 `security:"option"`
    Option5 *DriveFilesTouchSecurityOption5 `security:"option"`
    
}

type DriveFilesTouchRequest struct {
    PathParams DriveFilesTouchPathParams 
    QueryParams DriveFilesTouchQueryParams 
    Security DriveFilesTouchSecurity 
    
}

type DriveFilesTouchResponse struct {
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

