package operations

import (
"openapi/pkg/models/shared")

type YoutubeLiveBroadcastsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    OnBehalfOfContentOwnerChannel *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeLiveBroadcastsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveBroadcastsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveBroadcastsDeleteSecurity struct {
    Option1 *YoutubeLiveBroadcastsDeleteSecurityOption1 `security:"option"`
    Option2 *YoutubeLiveBroadcastsDeleteSecurityOption2 `security:"option"`
    
}

type YoutubeLiveBroadcastsDeleteRequest struct {
    QueryParams YoutubeLiveBroadcastsDeleteQueryParams 
    Security YoutubeLiveBroadcastsDeleteSecurity 
    
}

type YoutubeLiveBroadcastsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

