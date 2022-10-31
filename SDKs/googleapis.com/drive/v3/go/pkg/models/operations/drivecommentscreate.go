package operations

import (
"openapi/pkg/models/shared")

type DriveCommentsCreatePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveCommentsCreateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveCommentsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsCreateSecurity struct {
    Option1 *DriveCommentsCreateSecurityOption1 `security:"option"`
    Option2 *DriveCommentsCreateSecurityOption2 `security:"option"`
    
}

type DriveCommentsCreateRequest struct {
    PathParams DriveCommentsCreatePathParams 
    QueryParams DriveCommentsCreateQueryParams 
    Request *shared.Comment `request:"mediaType=application/json"`
    Security DriveCommentsCreateSecurity 
    
}

type DriveCommentsCreateResponse struct {
    Comment *shared.Comment 
    ContentType string 
    StatusCode int64 
    
}

