package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoAdvertisersManualTriggersGetPathParams struct {
    AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
    TriggerID string `pathParam:"style=simple,explode=false,name=triggerId"`
    
}

type DisplayvideoAdvertisersManualTriggersGetQueryParams struct {
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

type DisplayvideoAdvertisersManualTriggersGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoAdvertisersManualTriggersGetRequest struct {
    PathParams DisplayvideoAdvertisersManualTriggersGetPathParams 
    QueryParams DisplayvideoAdvertisersManualTriggersGetQueryParams 
    Security DisplayvideoAdvertisersManualTriggersGetSecurity 
    
}

type DisplayvideoAdvertisersManualTriggersGetResponse struct {
    ContentType string 
    ManualTrigger *shared.ManualTrigger 
    StatusCode int64 
    
}

