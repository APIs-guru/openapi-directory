package operations

import (
"openapi/pkg/models/shared")

type PubsubProjectsSubscriptionsSeekPathParams struct {
    Subscription string `pathParam:"style=simple,explode=false,name=subscription"`
    
}

type PubsubProjectsSubscriptionsSeekQueryParams struct {
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

type PubsubProjectsSubscriptionsSeekSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSubscriptionsSeekSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSubscriptionsSeekSecurity struct {
    Option1 *PubsubProjectsSubscriptionsSeekSecurityOption1 `security:"option"`
    Option2 *PubsubProjectsSubscriptionsSeekSecurityOption2 `security:"option"`
    
}

type PubsubProjectsSubscriptionsSeekRequest struct {
    PathParams PubsubProjectsSubscriptionsSeekPathParams 
    QueryParams PubsubProjectsSubscriptionsSeekQueryParams 
    Request *shared.SeekRequest `request:"mediaType=application/json"`
    Security PubsubProjectsSubscriptionsSeekSecurity 
    
}

type PubsubProjectsSubscriptionsSeekResponse struct {
    ContentType string 
    SeekResponse map[string]interface{} 
    StatusCode int64 
    
}

