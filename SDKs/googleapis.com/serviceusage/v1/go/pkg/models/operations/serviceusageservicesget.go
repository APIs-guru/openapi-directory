package operations

import (
"openapi/pkg/models/shared")

type ServiceusageServicesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ServiceusageServicesGetQueryParams struct {
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

type ServiceusageServicesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesGetSecurity struct {
    Option1 *ServiceusageServicesGetSecurityOption1 `security:"option"`
    Option2 *ServiceusageServicesGetSecurityOption2 `security:"option"`
    
}

type ServiceusageServicesGetRequest struct {
    PathParams ServiceusageServicesGetPathParams 
    QueryParams ServiceusageServicesGetQueryParams 
    Security ServiceusageServicesGetSecurity 
    
}

type ServiceusageServicesGetResponse struct {
    ContentType string 
    GoogleAPIServiceusageV1Service *shared.GoogleAPIServiceusageV1Service 
    StatusCode int64 
    
}

