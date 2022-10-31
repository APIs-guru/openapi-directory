package operations

import (
"openapi/pkg/models/shared")

type ServiceusageServicesBatchEnablePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServiceusageServicesBatchEnableQueryParams struct {
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

type ServiceusageServicesBatchEnableSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesBatchEnableSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesBatchEnableSecurity struct {
    Option1 *ServiceusageServicesBatchEnableSecurityOption1 `security:"option"`
    Option2 *ServiceusageServicesBatchEnableSecurityOption2 `security:"option"`
    
}

type ServiceusageServicesBatchEnableRequest struct {
    PathParams ServiceusageServicesBatchEnablePathParams 
    QueryParams ServiceusageServicesBatchEnableQueryParams 
    Request *shared.BatchEnableServicesRequest `request:"mediaType=application/json"`
    Security ServiceusageServicesBatchEnableSecurity 
    
}

type ServiceusageServicesBatchEnableResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

