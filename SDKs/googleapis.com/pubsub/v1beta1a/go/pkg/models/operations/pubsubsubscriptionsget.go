package operations

import (
"openapi/pkg/models/shared")

type PubsubSubscriptionsGetPathParams struct {
    Subscription string `pathParam:"style=simple,explode=false,name=subscription"`
    
}

type PubsubSubscriptionsGetQueryParams struct {
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

type PubsubSubscriptionsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubSubscriptionsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubSubscriptionsGetSecurity struct {
    Option1 *PubsubSubscriptionsGetSecurityOption1 `security:"option"`
    Option2 *PubsubSubscriptionsGetSecurityOption2 `security:"option"`
    
}

type PubsubSubscriptionsGetRequest struct {
    PathParams PubsubSubscriptionsGetPathParams 
    QueryParams PubsubSubscriptionsGetQueryParams 
    Security PubsubSubscriptionsGetSecurity 
    
}

type PubsubSubscriptionsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Subscription *shared.Subscription 
    
}

