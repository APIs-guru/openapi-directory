package operations

import (
"openapi/pkg/models/shared")

type YoutubeLiveChatMessagesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Hl *string `queryParam:"style=form,explode=true,name=hl"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LiveChatID string `queryParam:"style=form,explode=true,name=liveChatId"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProfileImageSize *int64 `queryParam:"style=form,explode=true,name=profileImageSize"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeLiveChatMessagesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatMessagesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatMessagesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatMessagesListSecurity struct {
    Option1 *YoutubeLiveChatMessagesListSecurityOption1 `security:"option"`
    Option2 *YoutubeLiveChatMessagesListSecurityOption2 `security:"option"`
    Option3 *YoutubeLiveChatMessagesListSecurityOption3 `security:"option"`
    
}

type YoutubeLiveChatMessagesListRequest struct {
    QueryParams YoutubeLiveChatMessagesListQueryParams 
    Security YoutubeLiveChatMessagesListSecurity 
    
}

type YoutubeLiveChatMessagesListResponse struct {
    ContentType string 
    LiveChatMessageListResponse *shared.LiveChatMessageListResponse 
    StatusCode int64 
    
}

