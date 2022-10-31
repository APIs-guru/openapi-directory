package operations

import (
"openapi/pkg/models/shared")

type PubsubProjectsTopicsCreatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PubsubProjectsTopicsCreateQueryParams struct {
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

type PubsubProjectsTopicsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsTopicsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsTopicsCreateSecurity struct {
    Option1 *PubsubProjectsTopicsCreateSecurityOption1 `security:"option"`
    Option2 *PubsubProjectsTopicsCreateSecurityOption2 `security:"option"`
    
}

type PubsubProjectsTopicsCreateRequest struct {
    PathParams PubsubProjectsTopicsCreatePathParams 
    QueryParams PubsubProjectsTopicsCreateQueryParams 
    Request *shared.Topic `request:"mediaType=application/json"`
    Security PubsubProjectsTopicsCreateSecurity 
    
}

type PubsubProjectsTopicsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Topic *shared.Topic 
    
}

