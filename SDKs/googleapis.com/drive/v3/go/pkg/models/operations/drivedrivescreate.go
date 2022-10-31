package operations

import (
"openapi/pkg/models/shared")

type DriveDrivesCreateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestID string `queryParam:"style=form,explode=true,name=requestId"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveDrivesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveDrivesCreateRequest struct {
    QueryParams DriveDrivesCreateQueryParams 
    Request *shared.Drive `request:"mediaType=application/json"`
    Security DriveDrivesCreateSecurity 
    
}

type DriveDrivesCreateResponse struct {
    ContentType string 
    Drive *shared.Drive 
    StatusCode int64 
    
}

