package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoAdvertisersChannelsPatchPathParams struct {
    AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    
}

type DisplayvideoAdvertisersChannelsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PartnerID *string `queryParam:"style=form,explode=true,name=partnerId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DisplayvideoAdvertisersChannelsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoAdvertisersChannelsPatchRequest struct {
    PathParams DisplayvideoAdvertisersChannelsPatchPathParams 
    QueryParams DisplayvideoAdvertisersChannelsPatchQueryParams 
    Request *shared.Channel `request:"mediaType=application/json"`
    Security DisplayvideoAdvertisersChannelsPatchSecurity 
    
}

type DisplayvideoAdvertisersChannelsPatchResponse struct {
    Channel *shared.Channel 
    ContentType string 
    StatusCode int64 
    
}

