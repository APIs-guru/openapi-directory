package operations

import (
"openapi/pkg/models/shared")

type BloggerBlogsGetPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    
}


type BloggerBlogsGetViewEnum string

const (
    BloggerBlogsGetViewEnumViewTypeUnspecified BloggerBlogsGetViewEnum = "VIEW_TYPE_UNSPECIFIED"
BloggerBlogsGetViewEnumReader BloggerBlogsGetViewEnum = "READER"
BloggerBlogsGetViewEnumAuthor BloggerBlogsGetViewEnum = "AUTHOR"
BloggerBlogsGetViewEnumAdmin BloggerBlogsGetViewEnum = "ADMIN"
)


type BloggerBlogsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxPosts *int64 `queryParam:"style=form,explode=true,name=maxPosts"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *BloggerBlogsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type BloggerBlogsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerBlogsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerBlogsGetSecurity struct {
    Option1 *BloggerBlogsGetSecurityOption1 `security:"option"`
    Option2 *BloggerBlogsGetSecurityOption2 `security:"option"`
    
}

type BloggerBlogsGetRequest struct {
    PathParams BloggerBlogsGetPathParams 
    QueryParams BloggerBlogsGetQueryParams 
    Security BloggerBlogsGetSecurity 
    
}

type BloggerBlogsGetResponse struct {
    Blog *shared.Blog 
    ContentType string 
    StatusCode int64 
    
}

