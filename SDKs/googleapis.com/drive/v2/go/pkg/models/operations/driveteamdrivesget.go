package operations

import (
"openapi/pkg/models/shared")

type DriveTeamdrivesGetPathParams struct {
    TeamDriveID string `pathParam:"style=simple,explode=false,name=teamDriveId"`
    
}

type DriveTeamdrivesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UseDomainAdminAccess *bool `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveTeamdrivesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveTeamdrivesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveTeamdrivesGetSecurity struct {
    Option1 *DriveTeamdrivesGetSecurityOption1 `security:"option"`
    Option2 *DriveTeamdrivesGetSecurityOption2 `security:"option"`
    
}

type DriveTeamdrivesGetRequest struct {
    PathParams DriveTeamdrivesGetPathParams 
    QueryParams DriveTeamdrivesGetQueryParams 
    Security DriveTeamdrivesGetSecurity 
    
}

type DriveTeamdrivesGetResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDrive *shared.TeamDrive 
    
}

