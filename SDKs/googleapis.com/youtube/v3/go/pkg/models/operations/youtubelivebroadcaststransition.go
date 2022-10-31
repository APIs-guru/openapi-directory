package operations

import (
"openapi/pkg/models/shared")


type YoutubeLiveBroadcastsTransitionBroadcastStatusEnum string

const (
    YoutubeLiveBroadcastsTransitionBroadcastStatusEnumStatusUnspecified YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = "statusUnspecified"
YoutubeLiveBroadcastsTransitionBroadcastStatusEnumTesting YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = "testing"
YoutubeLiveBroadcastsTransitionBroadcastStatusEnumLive YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = "live"
YoutubeLiveBroadcastsTransitionBroadcastStatusEnumComplete YoutubeLiveBroadcastsTransitionBroadcastStatusEnum = "complete"
)


type YoutubeLiveBroadcastsTransitionQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    BroadcastStatus YoutubeLiveBroadcastsTransitionBroadcastStatusEnum `queryParam:"style=form,explode=true,name=broadcastStatus"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    OnBehalfOfContentOwnerChannel *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeLiveBroadcastsTransitionSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveBroadcastsTransitionSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeLiveBroadcastsTransitionSecurity struct {
    Option1 *YoutubeLiveBroadcastsTransitionSecurityOption1 `security:"option"`
    Option2 *YoutubeLiveBroadcastsTransitionSecurityOption2 `security:"option"`
    
}

type YoutubeLiveBroadcastsTransitionRequest struct {
    QueryParams YoutubeLiveBroadcastsTransitionQueryParams 
    Security YoutubeLiveBroadcastsTransitionSecurity 
    
}

type YoutubeLiveBroadcastsTransitionResponse struct {
    ContentType string 
    LiveBroadcast *shared.LiveBroadcast 
    StatusCode int64 
    
}

