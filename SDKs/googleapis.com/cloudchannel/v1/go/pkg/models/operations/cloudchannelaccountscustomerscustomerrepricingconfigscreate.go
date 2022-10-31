package operations

import (
"openapi/pkg/models/shared")

type CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams struct {
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

type CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest struct {
    PathParams CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams 
    QueryParams CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams 
    Request *shared.GoogleCloudChannelV1CustomerRepricingConfig `request:"mediaType=application/json"`
    Security CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity 
    
}

type CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse struct {
    ContentType string 
    GoogleCloudChannelV1CustomerRepricingConfig *shared.GoogleCloudChannelV1CustomerRepricingConfig 
    StatusCode int64 
    
}

