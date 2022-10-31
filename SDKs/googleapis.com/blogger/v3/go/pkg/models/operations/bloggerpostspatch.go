package operations

import (
"openapi/pkg/models/shared")

type BloggerPostsPatchPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    PostID string `pathParam:"style=simple,explode=false,name=postId"`
    
}

type BloggerPostsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    FetchBody *bool `queryParam:"style=form,explode=true,name=fetchBody"`
    FetchImages *bool `queryParam:"style=form,explode=true,name=fetchImages"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxComments *int64 `queryParam:"style=form,explode=true,name=maxComments"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Publish *bool `queryParam:"style=form,explode=true,name=publish"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Revert *bool `queryParam:"style=form,explode=true,name=revert"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BloggerPostsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerPostsPatchRequest struct {
    PathParams BloggerPostsPatchPathParams 
    QueryParams BloggerPostsPatchQueryParams 
    Request *shared.Post `request:"mediaType=application/json"`
    Security BloggerPostsPatchSecurity 
    
}

type BloggerPostsPatchResponse struct {
    ContentType string 
    Post *shared.Post 
    StatusCode int64 
    
}

