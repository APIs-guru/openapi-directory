package operations

import (
"openapi/pkg/models/shared")

type DriveDrivesHidePathParams struct {
    DriveID string `pathParam:"style=simple,explode=false,name=driveId"`
    
}

type DriveDrivesHideQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveDrivesHideSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveDrivesHideRequest struct {
    PathParams DriveDrivesHidePathParams 
    QueryParams DriveDrivesHideQueryParams 
    Security DriveDrivesHideSecurity 
    
}

type DriveDrivesHideResponse struct {
    ContentType string 
    Drive *shared.Drive 
    StatusCode int64 
    
}

