package operations

import (
"openapi/pkg/models/shared")

type DriveRepliesUpdatePathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    ReplyID string `pathParam:"style=simple,explode=false,name=replyId"`
    
}

type DriveRepliesUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveRepliesUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesUpdateSecurity struct {
    Option1 *DriveRepliesUpdateSecurityOption1 `security:"option"`
    Option2 *DriveRepliesUpdateSecurityOption2 `security:"option"`
    
}

type DriveRepliesUpdateRequest struct {
    PathParams DriveRepliesUpdatePathParams 
    QueryParams DriveRepliesUpdateQueryParams 
    Request *shared.Reply `request:"mediaType=application/json"`
    Security DriveRepliesUpdateSecurity 
    
}

type DriveRepliesUpdateResponse struct {
    ContentType string 
    Reply *shared.Reply 
    StatusCode int64 
    
}

