package operations

import (
"openapi/pkg/models/shared")

type YoutubeLiveChatModeratorsInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeLiveChatModeratorsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatModeratorsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatModeratorsInsertSecurity struct {
    Option1 *YoutubeLiveChatModeratorsInsertSecurityOption1 `security:"option"`
    Option2 *YoutubeLiveChatModeratorsInsertSecurityOption2 `security:"option"`
    
}

type YoutubeLiveChatModeratorsInsertRequest struct {
    QueryParams YoutubeLiveChatModeratorsInsertQueryParams 
    Request *shared.LiveChatModerator `request:"mediaType=application/json"`
    Security YoutubeLiveChatModeratorsInsertSecurity 
    
}

type YoutubeLiveChatModeratorsInsertResponse struct {
    ContentType string 
    LiveChatModerator *shared.LiveChatModerator 
    StatusCode int64 
    
}

