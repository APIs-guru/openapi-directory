package operations

import (
"openapi/pkg/models/shared")


type YoutubeCommentsListTextFormatEnum string

const (
    YoutubeCommentsListTextFormatEnumTextFormatUnspecified YoutubeCommentsListTextFormatEnum = "textFormatUnspecified"
YoutubeCommentsListTextFormatEnumHTML YoutubeCommentsListTextFormatEnum = "html"
YoutubeCommentsListTextFormatEnumPlainText YoutubeCommentsListTextFormatEnum = "plainText"
)


type YoutubeCommentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TextFormat *YoutubeCommentsListTextFormatEnum `queryParam:"style=form,explode=true,name=textFormat"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeCommentsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeCommentsListRequest struct {
    QueryParams YoutubeCommentsListQueryParams 
    Security YoutubeCommentsListSecurity 
    
}

type YoutubeCommentsListResponse struct {
    CommentListResponse *shared.CommentListResponse 
    ContentType string 
    StatusCode int64 
    
}

