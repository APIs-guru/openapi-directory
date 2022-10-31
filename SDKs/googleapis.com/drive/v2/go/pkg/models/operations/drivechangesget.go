package operations

import (
"openapi/pkg/models/shared")

type DriveChangesGetPathParams struct {
    ChangeID string `pathParam:"style=simple,explode=false,name=changeId"`
    
}

type DriveChangesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    DriveID *string `queryParam:"style=form,explode=true,name=driveId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    TeamDriveID *string `queryParam:"style=form,explode=true,name=teamDriveId"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveChangesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesGetSecurity struct {
    Option1 *DriveChangesGetSecurityOption1 `security:"option"`
    Option2 *DriveChangesGetSecurityOption2 `security:"option"`
    Option3 *DriveChangesGetSecurityOption3 `security:"option"`
    Option4 *DriveChangesGetSecurityOption4 `security:"option"`
    Option5 *DriveChangesGetSecurityOption5 `security:"option"`
    Option6 *DriveChangesGetSecurityOption6 `security:"option"`
    Option7 *DriveChangesGetSecurityOption7 `security:"option"`
    Option8 *DriveChangesGetSecurityOption8 `security:"option"`
    
}

type DriveChangesGetRequest struct {
    PathParams DriveChangesGetPathParams 
    QueryParams DriveChangesGetQueryParams 
    Security DriveChangesGetSecurity 
    
}

type DriveChangesGetResponse struct {
    Change *shared.Change 
    ContentType string 
    StatusCode int64 
    
}

