package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams struct {
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

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams 
    QueryParams CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams 
    Request *shared.UnbindDeviceFromGatewayRequest `request:"mediaType=application/json"`
    Security CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity 
    
}

type CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse struct {
    ContentType string 
    StatusCode int64 
    UnbindDeviceFromGatewayResponse map[string]interface{} 
    
}

