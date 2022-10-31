package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams struct {
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

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams 
    QueryParams CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams 
    Request *shared.ModifyCloudToDeviceConfigRequest `request:"mediaType=application/json"`
    Security CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity 
    
}

type CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse struct {
    ContentType string 
    DeviceConfig *shared.DeviceConfig 
    StatusCode int64 
    
}

