package operations

import (
"openapi/pkg/models/shared")

type ServicenetworkingServicesDisableVpcServiceControlsPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServicenetworkingServicesDisableVpcServiceControlsQueryParams struct {
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

type ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesDisableVpcServiceControlsSecurity struct {
    Option1 *ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1 `security:"option"`
    Option2 *ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2 `security:"option"`
    
}

type ServicenetworkingServicesDisableVpcServiceControlsRequest struct {
    PathParams ServicenetworkingServicesDisableVpcServiceControlsPathParams 
    QueryParams ServicenetworkingServicesDisableVpcServiceControlsQueryParams 
    Request *shared.DisableVpcServiceControlsRequest `request:"mediaType=application/json"`
    Security ServicenetworkingServicesDisableVpcServiceControlsSecurity 
    
}

type ServicenetworkingServicesDisableVpcServiceControlsResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

