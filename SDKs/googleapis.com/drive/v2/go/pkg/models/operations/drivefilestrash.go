package operations

import (
"openapi/pkg/models/shared")

type DriveFilesTrashPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveFilesTrashQueryParams struct {
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

type DriveFilesTrashSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTrashSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTrashSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTrashSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesTrashSecurity struct {
    Option1 *DriveFilesTrashSecurityOption1 `security:"option"`
    Option2 *DriveFilesTrashSecurityOption2 `security:"option"`
    Option3 *DriveFilesTrashSecurityOption3 `security:"option"`
    Option4 *DriveFilesTrashSecurityOption4 `security:"option"`
    
}

type DriveFilesTrashRequest struct {
    PathParams DriveFilesTrashPathParams 
    QueryParams DriveFilesTrashQueryParams 
    Security DriveFilesTrashSecurity 
    
}

type DriveFilesTrashResponse struct {
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

