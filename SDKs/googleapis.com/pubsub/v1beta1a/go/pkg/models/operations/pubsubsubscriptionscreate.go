package operations

import (
"openapi/pkg/models/shared")

type PubsubSubscriptionsCreateQueryParams struct {
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

type PubsubSubscriptionsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubSubscriptionsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubSubscriptionsCreateSecurity struct {
    Option1 *PubsubSubscriptionsCreateSecurityOption1 `security:"option"`
    Option2 *PubsubSubscriptionsCreateSecurityOption2 `security:"option"`
    
}

type PubsubSubscriptionsCreateRequest struct {
    QueryParams PubsubSubscriptionsCreateQueryParams 
    Request *shared.Subscription `request:"mediaType=application/json"`
    Security PubsubSubscriptionsCreateSecurity 
    
}

type PubsubSubscriptionsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Subscription *shared.Subscription 
    
}

