package operations

import (
"openapi/pkg/models/shared")

type PubsubTopicsGetPathParams struct {
    Topic string `pathParam:"style=simple,explode=false,name=topic"`
    
}

type PubsubTopicsGetQueryParams struct {
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

type PubsubTopicsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubTopicsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubTopicsGetSecurity struct {
    Option1 *PubsubTopicsGetSecurityOption1 `security:"option"`
    Option2 *PubsubTopicsGetSecurityOption2 `security:"option"`
    
}

type PubsubTopicsGetRequest struct {
    PathParams PubsubTopicsGetPathParams 
    QueryParams PubsubTopicsGetQueryParams 
    Security PubsubTopicsGetSecurity 
    
}

type PubsubTopicsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Topic *shared.Topic 
    
}

