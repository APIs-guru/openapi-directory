package operations

import (
"openapi/pkg/models/shared")

type PubsubSubscriptionsPullBatchQueryParams struct {
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

type PubsubSubscriptionsPullBatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubSubscriptionsPullBatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubSubscriptionsPullBatchSecurity struct {
    Option1 *PubsubSubscriptionsPullBatchSecurityOption1 `security:"option"`
    Option2 *PubsubSubscriptionsPullBatchSecurityOption2 `security:"option"`
    
}

type PubsubSubscriptionsPullBatchRequest struct {
    QueryParams PubsubSubscriptionsPullBatchQueryParams 
    Request *shared.PullBatchRequest `request:"mediaType=application/json"`
    Security PubsubSubscriptionsPullBatchSecurity 
    
}

type PubsubSubscriptionsPullBatchResponse struct {
    ContentType string 
    PullBatchResponse *shared.PullBatchResponse 
    StatusCode int64 
    
}

