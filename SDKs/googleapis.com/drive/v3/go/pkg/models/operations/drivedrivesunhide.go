package operations

import (
"openapi/pkg/models/shared")

type DriveDrivesUnhidePathParams struct {
    DriveID string `pathParam:"style=simple,explode=false,name=driveId"`
    
}

type DriveDrivesUnhideQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveDrivesUnhideSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveDrivesUnhideRequest struct {
    PathParams DriveDrivesUnhidePathParams 
    QueryParams DriveDrivesUnhideQueryParams 
    Security DriveDrivesUnhideSecurity 
    
}

type DriveDrivesUnhideResponse struct {
    ContentType string 
    Drive *shared.Drive 
    StatusCode int64 
    
}

