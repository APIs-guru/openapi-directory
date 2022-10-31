package operations

import (
"openapi/pkg/models/shared")

type DriveCommentsDeletePathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveCommentsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveCommentsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveCommentsDeleteSecurity struct {
    Option1 *DriveCommentsDeleteSecurityOption1 `security:"option"`
    Option2 *DriveCommentsDeleteSecurityOption2 `security:"option"`
    
}

type DriveCommentsDeleteRequest struct {
    PathParams DriveCommentsDeletePathParams 
    QueryParams DriveCommentsDeleteQueryParams 
    Security DriveCommentsDeleteSecurity 
    
}

type DriveCommentsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

