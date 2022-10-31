package operations

import (
"openapi/pkg/models/shared")

type BloggerCommentsListPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    PostID string `pathParam:"style=simple,explode=false,name=postId"`
    
}

type BloggerCommentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    FetchBodies *bool `queryParam:"style=form,explode=true,name=fetchBodies"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BloggerCommentsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsListRequest struct {
    PathParams BloggerCommentsListPathParams 
    QueryParams BloggerCommentsListQueryParams 
    Security BloggerCommentsListSecurity 
    
}

type BloggerCommentsListResponse struct {
    CommentList *shared.CommentList 
    ContentType string 
    StatusCode int64 
    
}

