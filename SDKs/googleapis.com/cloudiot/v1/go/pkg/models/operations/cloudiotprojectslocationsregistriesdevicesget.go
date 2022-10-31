package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesDevicesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    FieldMask *string `queryParam:"style=form,explode=true,name=fieldMask"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesGetSecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesDevicesGetRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesDevicesGetPathParams 
    QueryParams CloudiotProjectsLocationsRegistriesDevicesGetQueryParams 
    Security CloudiotProjectsLocationsRegistriesDevicesGetSecurity 
    
}

type CloudiotProjectsLocationsRegistriesDevicesGetResponse struct {
    ContentType string 
    Device *shared.Device 
    StatusCode int64 
    
}

