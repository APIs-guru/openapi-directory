package operations

import (
"openapi/pkg/models/shared")

type DriveFilesCreateQueryParams struct {
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
    UseContentAsIndexableText *bool `queryParam:"style=form,explode=true,name=useContentAsIndexableText"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveFilesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesCreateSecurity struct {
    Option1 *DriveFilesCreateSecurityOption1 `security:"option"`
    Option2 *DriveFilesCreateSecurityOption2 `security:"option"`
    Option3 *DriveFilesCreateSecurityOption3 `security:"option"`
    
}

type DriveFilesCreateRequest struct {
    QueryParams DriveFilesCreateQueryParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security DriveFilesCreateSecurity 
    
}

type DriveFilesCreateResponse struct {
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

