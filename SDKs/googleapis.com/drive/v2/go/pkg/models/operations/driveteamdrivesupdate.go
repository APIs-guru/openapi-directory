package operations

import (
"openapi/pkg/models/shared")

type DriveTeamdrivesUpdatePathParams struct {
    TeamDriveID string `pathParam:"style=simple,explode=false,name=teamDriveId"`
    
}

type DriveTeamdrivesUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UseDomainAdminAccess *bool `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveTeamdrivesUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveTeamdrivesUpdateRequest struct {
    PathParams DriveTeamdrivesUpdatePathParams 
    QueryParams DriveTeamdrivesUpdateQueryParams 
    Request *shared.TeamDrive `request:"mediaType=application/json"`
    Security DriveTeamdrivesUpdateSecurity 
    
}

type DriveTeamdrivesUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDrive *shared.TeamDrive 
    
}

