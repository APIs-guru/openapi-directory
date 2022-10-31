package operations

import (
"openapi/pkg/models/shared")

type BloggerCommentsGetPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
    PostID string `pathParam:"style=simple,explode=false,name=postId"`
    
}


type BloggerCommentsGetViewEnum string

const (
    BloggerCommentsGetViewEnumViewTypeUnspecified BloggerCommentsGetViewEnum = "VIEW_TYPE_UNSPECIFIED"
BloggerCommentsGetViewEnumReader BloggerCommentsGetViewEnum = "READER"
BloggerCommentsGetViewEnumAuthor BloggerCommentsGetViewEnum = "AUTHOR"
BloggerCommentsGetViewEnumAdmin BloggerCommentsGetViewEnum = "ADMIN"
)


type BloggerCommentsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *BloggerCommentsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type BloggerCommentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsGetSecurity struct {
    Option1 *BloggerCommentsGetSecurityOption1 `security:"option"`
    Option2 *BloggerCommentsGetSecurityOption2 `security:"option"`
    
}

type BloggerCommentsGetRequest struct {
    PathParams BloggerCommentsGetPathParams 
    QueryParams BloggerCommentsGetQueryParams 
    Security BloggerCommentsGetSecurity 
    
}

type BloggerCommentsGetResponse struct {
    Comment *shared.Comment 
    ContentType string 
    StatusCode int64 
    
}

