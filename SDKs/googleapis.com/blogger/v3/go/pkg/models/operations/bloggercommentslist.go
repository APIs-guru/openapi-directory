package operations

import (
"openapi/pkg/models/shared")

type BloggerCommentsListPathParams struct {
    BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
    PostID string `pathParam:"style=simple,explode=false,name=postId"`
    
}


type BloggerCommentsListStatusEnum string

const (
    BloggerCommentsListStatusEnumLive BloggerCommentsListStatusEnum = "LIVE"
BloggerCommentsListStatusEnumEmptied BloggerCommentsListStatusEnum = "EMPTIED"
BloggerCommentsListStatusEnumPending BloggerCommentsListStatusEnum = "PENDING"
BloggerCommentsListStatusEnumSpam BloggerCommentsListStatusEnum = "SPAM"
)



type BloggerCommentsListViewEnum string

const (
    BloggerCommentsListViewEnumViewTypeUnspecified BloggerCommentsListViewEnum = "VIEW_TYPE_UNSPECIFIED"
BloggerCommentsListViewEnumReader BloggerCommentsListViewEnum = "READER"
BloggerCommentsListViewEnumAuthor BloggerCommentsListViewEnum = "AUTHOR"
BloggerCommentsListViewEnumAdmin BloggerCommentsListViewEnum = "ADMIN"
)


type BloggerCommentsListQueryParams struct {
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
    Status *BloggerCommentsListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *BloggerCommentsListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type BloggerCommentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerCommentsListSecurity struct {
    Option1 *BloggerCommentsListSecurityOption1 `security:"option"`
    Option2 *BloggerCommentsListSecurityOption2 `security:"option"`
    
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

