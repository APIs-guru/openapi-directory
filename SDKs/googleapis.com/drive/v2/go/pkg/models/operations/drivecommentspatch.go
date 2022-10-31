package operations

import (
"openapi/pkg/models/shared")

type DriveCommentsPatchPathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveCommentsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveCommentsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsPatchSecurity struct {
    Option1 *DriveCommentsPatchSecurityOption1 `security:"option"`
    Option2 *DriveCommentsPatchSecurityOption2 `security:"option"`
    
}

type DriveCommentsPatchRequest struct {
    PathParams DriveCommentsPatchPathParams 
    QueryParams DriveCommentsPatchQueryParams 
    Request *shared.Comment `request:"mediaType=application/json"`
    Security DriveCommentsPatchSecurity 
    
}

type DriveCommentsPatchResponse struct {
    Comment *shared.Comment 
    ContentType string 
    StatusCode int64 
    
}

