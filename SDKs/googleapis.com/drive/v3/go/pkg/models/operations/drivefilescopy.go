package operations

import (
"openapi/pkg/models/shared")

type DriveFilesCopyPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveFilesCopyQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    EnforceSingleParent *bool `queryParam:"style=form,explode=true,name=enforceSingleParent"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IgnoreDefaultVisibility *bool `queryParam:"style=form,explode=true,name=ignoreDefaultVisibility"`
    IncludeLabels *string `queryParam:"style=form,explode=true,name=includeLabels"`
    IncludePermissionsForView *string `queryParam:"style=form,explode=true,name=includePermissionsForView"`
    KeepRevisionForever *bool `queryParam:"style=form,explode=true,name=keepRevisionForever"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OcrLanguage *string `queryParam:"style=form,explode=true,name=ocrLanguage"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveFilesCopySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCopySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCopySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCopySecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCopySecurity struct {
    Option1 *DriveFilesCopySecurityOption1 `security:"option"`
    Option2 *DriveFilesCopySecurityOption2 `security:"option"`
    Option3 *DriveFilesCopySecurityOption3 `security:"option"`
    Option4 *DriveFilesCopySecurityOption4 `security:"option"`
    
}

type DriveFilesCopyRequest struct {
    PathParams DriveFilesCopyPathParams 
    QueryParams DriveFilesCopyQueryParams 
    Request *shared.File `request:"mediaType=application/json"`
    Security DriveFilesCopySecurity 
    
}

type DriveFilesCopyResponse struct {
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

