package operations

import (
"openapi/pkg/models/shared")

type YoutubeChannelBannersInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    OnBehalfOfContentOwnerChannel *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeChannelBannersInsertRequests struct {
    ApplicationOctetStream []byte `request:"mediaType=application/octet-stream"`
    ImageJpeg []byte `request:"mediaType=image/jpeg"`
    ImagePng []byte `request:"mediaType=image/png"`
    
}

type YoutubeChannelBannersInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeChannelBannersInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeChannelBannersInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeChannelBannersInsertSecurity struct {
    Option1 *YoutubeChannelBannersInsertSecurityOption1 `security:"option"`
    Option2 *YoutubeChannelBannersInsertSecurityOption2 `security:"option"`
    Option3 *YoutubeChannelBannersInsertSecurityOption3 `security:"option"`
    
}

type YoutubeChannelBannersInsertRequest struct {
    QueryParams YoutubeChannelBannersInsertQueryParams 
    Request *YoutubeChannelBannersInsertRequests 
    Security YoutubeChannelBannersInsertSecurity 
    
}

type YoutubeChannelBannersInsertResponse struct {
    ChannelBannerResource *shared.ChannelBannerResource 
    ContentType string 
    StatusCode int64 
    
}

