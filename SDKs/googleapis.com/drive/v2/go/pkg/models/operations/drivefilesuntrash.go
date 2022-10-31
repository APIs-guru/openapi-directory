package operations

import (
"openapi/pkg/models/shared")

type DriveFilesUntrashPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveFilesUntrashQueryParams struct {
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

type DriveFilesUntrashSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUntrashSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUntrashSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUntrashSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUntrashSecurity struct {
    Option1 *DriveFilesUntrashSecurityOption1 `security:"option"`
    Option2 *DriveFilesUntrashSecurityOption2 `security:"option"`
    Option3 *DriveFilesUntrashSecurityOption3 `security:"option"`
    Option4 *DriveFilesUntrashSecurityOption4 `security:"option"`
    
}

type DriveFilesUntrashRequest struct {
    PathParams DriveFilesUntrashPathParams 
    QueryParams DriveFilesUntrashQueryParams 
    Security DriveFilesUntrashSecurity 
    
}

type DriveFilesUntrashResponse struct {
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

