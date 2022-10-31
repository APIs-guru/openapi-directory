package operations

import (
"openapi/pkg/models/shared")

type DriveRepliesPatchPathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    ReplyID string `pathParam:"style=simple,explode=false,name=replyId"`
    
}

type DriveRepliesPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveRepliesPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesPatchSecurity struct {
    Option1 *DriveRepliesPatchSecurityOption1 `security:"option"`
    Option2 *DriveRepliesPatchSecurityOption2 `security:"option"`
    
}

type DriveRepliesPatchRequest struct {
    PathParams DriveRepliesPatchPathParams 
    QueryParams DriveRepliesPatchQueryParams 
    Request *shared.CommentReply `request:"mediaType=application/json"`
    Security DriveRepliesPatchSecurity 
    
}

type DriveRepliesPatchResponse struct {
    CommentReply *shared.CommentReply 
    ContentType string 
    StatusCode int64 
    
}

