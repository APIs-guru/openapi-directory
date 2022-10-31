package operations

import (
"openapi/pkg/models/shared")

type CloudidentityDevicesDeviceUsersLookupPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudidentityDevicesDeviceUsersLookupQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AndroidID *string `queryParam:"style=form,explode=true,name=androidId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RawResourceID *string `queryParam:"style=form,explode=true,name=rawResourceId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type CloudidentityDevicesDeviceUsersLookupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesDeviceUsersLookupRequest struct {
    PathParams CloudidentityDevicesDeviceUsersLookupPathParams 
    QueryParams CloudidentityDevicesDeviceUsersLookupQueryParams 
    Security CloudidentityDevicesDeviceUsersLookupSecurity 
    
}

type CloudidentityDevicesDeviceUsersLookupResponse struct {
    ContentType string 
    GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse *shared.GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse 
    StatusCode int64 
    
}

