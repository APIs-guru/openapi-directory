package operations

import (
"openapi/pkg/models/shared")

type YoutubeLiveChatBansDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeLiveChatBansDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatBansDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveChatBansDeleteSecurity struct {
    Option1 *YoutubeLiveChatBansDeleteSecurityOption1 `security:"option"`
    Option2 *YoutubeLiveChatBansDeleteSecurityOption2 `security:"option"`
    
}

type YoutubeLiveChatBansDeleteRequest struct {
    QueryParams YoutubeLiveChatBansDeleteQueryParams 
    Security YoutubeLiveChatBansDeleteSecurity 
    
}

type YoutubeLiveChatBansDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

