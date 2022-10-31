package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams struct {
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

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams 
    QueryParams CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams 
    Request *shared.BindDeviceToGatewayRequest `request:"mediaType=application/json"`
    Security CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity 
    
}

type CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse struct {
    BindDeviceToGatewayResponse map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

