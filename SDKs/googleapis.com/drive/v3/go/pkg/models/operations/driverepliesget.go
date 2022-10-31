package operations

import (
"openapi/pkg/models/shared")

type DriveRepliesGetPathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    ReplyID string `pathParam:"style=simple,explode=false,name=replyId"`
    
}

type DriveRepliesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveRepliesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRepliesGetSecurity struct {
    Option1 *DriveRepliesGetSecurityOption1 `security:"option"`
    Option2 *DriveRepliesGetSecurityOption2 `security:"option"`
    Option3 *DriveRepliesGetSecurityOption3 `security:"option"`
    
}

type DriveRepliesGetRequest struct {
    PathParams DriveRepliesGetPathParams 
    QueryParams DriveRepliesGetQueryParams 
    Security DriveRepliesGetSecurity 
    
}

type DriveRepliesGetResponse struct {
    ContentType string 
    Reply *shared.Reply 
    StatusCode int64 
    
}

