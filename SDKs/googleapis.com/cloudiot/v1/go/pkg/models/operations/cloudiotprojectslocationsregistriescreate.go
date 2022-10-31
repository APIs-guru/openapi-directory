package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudiotProjectsLocationsRegistriesCreateQueryParams struct {
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

type CloudiotProjectsLocationsRegistriesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesCreateSecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesCreateSecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesCreateSecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesCreateRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesCreatePathParams 
    QueryParams CloudiotProjectsLocationsRegistriesCreateQueryParams 
    Request *shared.DeviceRegistry `request:"mediaType=application/json"`
    Security CloudiotProjectsLocationsRegistriesCreateSecurity 
    
}

type CloudiotProjectsLocationsRegistriesCreateResponse struct {
    ContentType string 
    DeviceRegistry *shared.DeviceRegistry 
    StatusCode int64 
    
}

