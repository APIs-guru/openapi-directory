package operations

import (
"openapi/pkg/models/shared")

type PubsubProjectsSubscriptionsAcknowledgePathParams struct {
    Subscription string `pathParam:"style=simple,explode=false,name=subscription"`
    
}

type PubsubProjectsSubscriptionsAcknowledgeQueryParams struct {
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

type PubsubProjectsSubscriptionsAcknowledgeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSubscriptionsAcknowledgeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSubscriptionsAcknowledgeSecurity struct {
    Option1 *PubsubProjectsSubscriptionsAcknowledgeSecurityOption1 `security:"option"`
    Option2 *PubsubProjectsSubscriptionsAcknowledgeSecurityOption2 `security:"option"`
    
}

type PubsubProjectsSubscriptionsAcknowledgeRequest struct {
    PathParams PubsubProjectsSubscriptionsAcknowledgePathParams 
    QueryParams PubsubProjectsSubscriptionsAcknowledgeQueryParams 
    Request *shared.AcknowledgeRequest `request:"mediaType=application/json"`
    Security PubsubProjectsSubscriptionsAcknowledgeSecurity 
    
}

type PubsubProjectsSubscriptionsAcknowledgeResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

