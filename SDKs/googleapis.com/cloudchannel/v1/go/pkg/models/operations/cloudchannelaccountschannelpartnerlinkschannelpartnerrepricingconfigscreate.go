package operations

import (
"openapi/pkg/models/shared")

type CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest struct {
    PathParams CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams 
    QueryParams CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams 
    Request *shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig `request:"mediaType=application/json"`
    Security CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity 
    
}

type CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse struct {
    ContentType string 
    GoogleCloudChannelV1ChannelPartnerRepricingConfig *shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig 
    StatusCode int64 
    
}

