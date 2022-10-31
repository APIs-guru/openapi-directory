package operations

import (
"openapi/pkg/models/shared")

type ServicenetworkingServicesEnableVpcServiceControlsPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServicenetworkingServicesEnableVpcServiceControlsQueryParams struct {
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

type ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesEnableVpcServiceControlsSecurity struct {
    Option1 *ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1 `security:"option"`
    Option2 *ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2 `security:"option"`
    
}

type ServicenetworkingServicesEnableVpcServiceControlsRequest struct {
    PathParams ServicenetworkingServicesEnableVpcServiceControlsPathParams 
    QueryParams ServicenetworkingServicesEnableVpcServiceControlsQueryParams 
    Request *shared.EnableVpcServiceControlsRequest `request:"mediaType=application/json"`
    Security ServicenetworkingServicesEnableVpcServiceControlsSecurity 
    
}

type ServicenetworkingServicesEnableVpcServiceControlsResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

