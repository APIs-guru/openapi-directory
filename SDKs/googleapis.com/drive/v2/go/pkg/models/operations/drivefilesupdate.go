package operations

import (
"openapi/pkg/models/shared")

type DriveFilesUpdatePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}


type DriveFilesUpdateModifiedDateBehaviorEnum string

const (
    DriveFilesUpdateModifiedDateBehaviorEnumFromBody DriveFilesUpdateModifiedDateBehaviorEnum = "fromBody"
DriveFilesUpdateModifiedDateBehaviorEnumFromBodyIfNeeded DriveFilesUpdateModifiedDateBehaviorEnum = "fromBodyIfNeeded"
DriveFilesUpdateModifiedDateBehaviorEnumFromBodyOrNow DriveFilesUpdateModifiedDateBehaviorEnum = "fromBodyOrNow"
DriveFilesUpdateModifiedDateBehaviorEnumNoChange DriveFilesUpdateModifiedDateBehaviorEnum = "noChange"
DriveFilesUpdateModifiedDateBehaviorEnumNow DriveFilesUpdateModifiedDateBehaviorEnum = "now"
DriveFilesUpdateModifiedDateBehaviorEnumNowIfNeeded DriveFilesUpdateModifiedDateBehaviorEnum = "nowIfNeeded"
)


type DriveFilesUpdateQueryParams struct {
    AddParents *string `queryParam:"style=form,explode=true,name=addParents"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Convert *bool `queryParam:"style=form,explode=true,name=convert"`
    EnforceSingleParent *bool `queryParam:"style=form,explode=true,name=enforceSingleParent"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeLabels *string `queryParam:"style=form,explode=true,name=includeLabels"`
    IncludePermissionsForView *string `queryParam:"style=form,explode=true,name=includePermissionsForView"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    ModifiedDateBehavior *DriveFilesUpdateModifiedDateBehaviorEnum `queryParam:"style=form,explode=true,name=modifiedDateBehavior"`
    NewRevision *bool `queryParam:"style=form,explode=true,name=newRevision"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Ocr *bool `queryParam:"style=form,explode=true,name=ocr"`
    OcrLanguage *string `queryParam:"style=form,explode=true,name=ocrLanguage"`
    Pinned *bool `queryParam:"style=form,explode=true,name=pinned"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RemoveParents *string `queryParam:"style=form,explode=true,name=removeParents"`
    SetModifiedDate *bool `queryParam:"style=form,explode=true,name=setModifiedDate"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    TimedTextLanguage *string `queryParam:"style=form,explode=true,name=timedTextLanguage"`
    TimedTextTrackName *string `queryParam:"style=form,explode=true,name=timedTextTrackName"`
    UpdateViewedDate *bool `queryParam:"style=form,explode=true,name=updateViewedDate"`
    UseContentAsIndexableText *bool `queryParam:"style=form,explode=true,name=useContentAsIndexableText"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveFilesUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUpdateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUpdateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUpdateSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesUpdateSecurity struct {
    Option1 *DriveFilesUpdateSecurityOption1 `security:"option"`
    Option2 *DriveFilesUpdateSecurityOption2 `security:"option"`
    Option3 *DriveFilesUpdateSecurityOption3 `security:"option"`
    Option4 *DriveFilesUpdateSecurityOption4 `security:"option"`
    Option5 *DriveFilesUpdateSecurityOption5 `security:"option"`
    Option6 *DriveFilesUpdateSecurityOption6 `security:"option"`
    
}

type DriveFilesUpdateRequest struct {
    PathParams DriveFilesUpdatePathParams 
    QueryParams DriveFilesUpdateQueryParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security DriveFilesUpdateSecurity 
    
}

type DriveFilesUpdateResponse struct {
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

