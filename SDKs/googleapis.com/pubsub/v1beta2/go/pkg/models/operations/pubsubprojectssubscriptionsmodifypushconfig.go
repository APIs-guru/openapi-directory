package operations

import (
"openapi/pkg/models/shared")

type PubsubProjectsSubscriptionsModifyPushConfigPathParams struct {
    Subscription string `pathParam:"style=simple,explode=false,name=subscription"`
    
}

type PubsubProjectsSubscriptionsModifyPushConfigQueryParams struct {
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

type PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSubscriptionsModifyPushConfigSecurity struct {
    Option1 *PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1 `security:"option"`
    Option2 *PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2 `security:"option"`
    
}

type PubsubProjectsSubscriptionsModifyPushConfigRequest struct {
    PathParams PubsubProjectsSubscriptionsModifyPushConfigPathParams 
    QueryParams PubsubProjectsSubscriptionsModifyPushConfigQueryParams 
    Request *shared.ModifyPushConfigRequest `request:"mediaType=application/json"`
    Security PubsubProjectsSubscriptionsModifyPushConfigSecurity 
    
}

type PubsubProjectsSubscriptionsModifyPushConfigResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

