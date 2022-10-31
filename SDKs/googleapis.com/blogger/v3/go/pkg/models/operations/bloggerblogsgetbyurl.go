package operations

import (
"openapi/pkg/models/shared")


type BloggerBlogsGetByURLViewEnum string

const (
    BloggerBlogsGetByURLViewEnumViewTypeUnspecified BloggerBlogsGetByURLViewEnum = "VIEW_TYPE_UNSPECIFIED"
BloggerBlogsGetByURLViewEnumReader BloggerBlogsGetByURLViewEnum = "READER"
BloggerBlogsGetByURLViewEnumAuthor BloggerBlogsGetByURLViewEnum = "AUTHOR"
BloggerBlogsGetByURLViewEnumAdmin BloggerBlogsGetByURLViewEnum = "ADMIN"
)


type BloggerBlogsGetByURLQueryParams struct {
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
    URL string `queryParam:"style=form,explode=true,name=url"`
    View *BloggerBlogsGetByURLViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type BloggerBlogsGetByURLSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerBlogsGetByURLSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerBlogsGetByURLSecurity struct {
    Option1 *BloggerBlogsGetByURLSecurityOption1 `security:"option"`
    Option2 *BloggerBlogsGetByURLSecurityOption2 `security:"option"`
    
}

type BloggerBlogsGetByURLRequest struct {
    QueryParams BloggerBlogsGetByURLQueryParams 
    Security BloggerBlogsGetByURLSecurity 
    
}

type BloggerBlogsGetByURLResponse struct {
    Blog *shared.Blog 
    ContentType string 
    StatusCode int64 
    
}

