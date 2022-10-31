package operations

import (
"openapi/pkg/models/shared")

type PlusCommentsGetPathParams struct {
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    
}

type PlusCommentsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type PlusCommentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusCommentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusCommentsGetSecurity struct {
    Option1 *PlusCommentsGetSecurityOption1 `security:"option"`
    Option2 *PlusCommentsGetSecurityOption2 `security:"option"`
    
}

type PlusCommentsGetRequest struct {
    PathParams PlusCommentsGetPathParams 
    QueryParams PlusCommentsGetQueryParams 
    Security PlusCommentsGetSecurity 
    
}

type PlusCommentsGetResponse struct {
    Comment *shared.Comment 
    ContentType string 
    StatusCode int64 
    
}

