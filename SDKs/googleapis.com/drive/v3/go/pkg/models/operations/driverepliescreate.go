package operations

import (
"openapi/pkg/models/shared")

type DriveRepliesCreatePathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveRepliesCreateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveRepliesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesCreateSecurity struct {
    Option1 *DriveRepliesCreateSecurityOption1 `security:"option"`
    Option2 *DriveRepliesCreateSecurityOption2 `security:"option"`
    
}

type DriveRepliesCreateRequest struct {
    PathParams DriveRepliesCreatePathParams 
    QueryParams DriveRepliesCreateQueryParams 
    Request *shared.Reply `request:"mediaType=application/json"`
    Security DriveRepliesCreateSecurity 
    
}

type DriveRepliesCreateResponse struct {
    ContentType string 
    Reply *shared.Reply 
    StatusCode int64 
    
}

