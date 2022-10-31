package operations

import (
"openapi/pkg/models/shared")

type BloggerCommentsListByBlogPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    
}


type BloggerCommentsListByBlogStatusEnum string

const (
    BloggerCommentsListByBlogStatusEnumLive BloggerCommentsListByBlogStatusEnum = "LIVE"
BloggerCommentsListByBlogStatusEnumEmptied BloggerCommentsListByBlogStatusEnum = "EMPTIED"
BloggerCommentsListByBlogStatusEnumPending BloggerCommentsListByBlogStatusEnum = "PENDING"
BloggerCommentsListByBlogStatusEnumSpam BloggerCommentsListByBlogStatusEnum = "SPAM"
)


type BloggerCommentsListByBlogQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EndDate *string `queryParam:"style=form,explode=true,name=endDate"`
    FetchBodies *bool `queryParam:"style=form,explode=true,name=fetchBodies"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartDate *string `queryParam:"style=form,explode=true,name=startDate"`
    Status []BloggerCommentsListByBlogStatusEnum `queryParam:"style=form,explode=true,name=status"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BloggerCommentsListByBlogSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsListByBlogSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsListByBlogSecurity struct {
    Option1 *BloggerCommentsListByBlogSecurityOption1 `security:"option"`
    Option2 *BloggerCommentsListByBlogSecurityOption2 `security:"option"`
    
}

type BloggerCommentsListByBlogRequest struct {
    PathParams BloggerCommentsListByBlogPathParams 
    QueryParams BloggerCommentsListByBlogQueryParams 
    Security BloggerCommentsListByBlogSecurity 
    
}

type BloggerCommentsListByBlogResponse struct {
    CommentList *shared.CommentList 
    ContentType string 
    StatusCode int64 
    
}

