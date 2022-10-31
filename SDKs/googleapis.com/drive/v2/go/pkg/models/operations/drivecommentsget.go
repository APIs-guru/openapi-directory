package operations

import (
"openapi/pkg/models/shared")

type DriveCommentsGetPathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveCommentsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveCommentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsGetSecurity struct {
    Option1 *DriveCommentsGetSecurityOption1 `security:"option"`
    Option2 *DriveCommentsGetSecurityOption2 `security:"option"`
    Option3 *DriveCommentsGetSecurityOption3 `security:"option"`
    
}

type DriveCommentsGetRequest struct {
    PathParams DriveCommentsGetPathParams 
    QueryParams DriveCommentsGetQueryParams 
    Security DriveCommentsGetSecurity 
    
}

type DriveCommentsGetResponse struct {
    Comment *shared.Comment 
    ContentType string 
    StatusCode int64 
    
}

