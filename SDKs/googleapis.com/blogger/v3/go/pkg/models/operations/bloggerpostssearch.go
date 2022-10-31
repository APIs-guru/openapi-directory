package operations

import (
"openapi/pkg/models/shared")

type BloggerPostsSearchPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    
}


type BloggerPostsSearchOrderByEnum string

const (
    BloggerPostsSearchOrderByEnumOrderByUnspecified BloggerPostsSearchOrderByEnum = "ORDER_BY_UNSPECIFIED"
BloggerPostsSearchOrderByEnumPublished BloggerPostsSearchOrderByEnum = "PUBLISHED"
BloggerPostsSearchOrderByEnumUpdated BloggerPostsSearchOrderByEnum = "UPDATED"
)


type BloggerPostsSearchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    FetchBodies *bool `queryParam:"style=form,explode=true,name=fetchBodies"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *BloggerPostsSearchOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Q string `queryParam:"style=form,explode=true,name=q"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BloggerPostsSearchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerPostsSearchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerPostsSearchSecurity struct {
    Option1 *BloggerPostsSearchSecurityOption1 `security:"option"`
    Option2 *BloggerPostsSearchSecurityOption2 `security:"option"`
    
}

type BloggerPostsSearchRequest struct {
    PathParams BloggerPostsSearchPathParams 
    QueryParams BloggerPostsSearchQueryParams 
    Security BloggerPostsSearchSecurity 
    
}

type BloggerPostsSearchResponse struct {
    ContentType string 
    PostList *shared.PostList 
    StatusCode int64 
    
}

