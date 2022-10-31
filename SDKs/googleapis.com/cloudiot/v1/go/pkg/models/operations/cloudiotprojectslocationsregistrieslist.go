package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudiotProjectsLocationsRegistriesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudiotProjectsLocationsRegistriesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesListSecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesListSecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesListSecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesListRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesListPathParams 
    QueryParams CloudiotProjectsLocationsRegistriesListQueryParams 
    Security CloudiotProjectsLocationsRegistriesListSecurity 
    
}

type CloudiotProjectsLocationsRegistriesListResponse struct {
    ContentType string 
    ListDeviceRegistriesResponse *shared.ListDeviceRegistriesResponse 
    StatusCode int64 
    
}

