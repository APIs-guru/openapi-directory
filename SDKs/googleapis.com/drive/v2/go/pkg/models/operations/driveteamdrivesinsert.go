package operations

import (
"openapi/pkg/models/shared")

type DriveTeamdrivesInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestID string `queryParam:"style=form,explode=true,name=requestId"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveTeamdrivesInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveTeamdrivesInsertRequest struct {
    QueryParams DriveTeamdrivesInsertQueryParams 
    Request *shared.TeamDrive `request:"mediaType=application/json"`
    Security DriveTeamdrivesInsertSecurity 
    
}

type DriveTeamdrivesInsertResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDrive *shared.TeamDrive 
    
}

