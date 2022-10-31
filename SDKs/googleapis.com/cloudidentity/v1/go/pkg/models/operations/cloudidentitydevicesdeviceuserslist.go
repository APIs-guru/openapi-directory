package operations

import (
"openapi/pkg/models/shared")

type CloudidentityDevicesDeviceUsersListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudidentityDevicesDeviceUsersListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Customer *string `queryParam:"style=form,explode=true,name=customer"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudidentityDevicesDeviceUsersListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesDeviceUsersListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesDeviceUsersListSecurity struct {
    Option1 *CloudidentityDevicesDeviceUsersListSecurityOption1 `security:"option"`
    Option2 *CloudidentityDevicesDeviceUsersListSecurityOption2 `security:"option"`
    
}

type CloudidentityDevicesDeviceUsersListRequest struct {
    PathParams CloudidentityDevicesDeviceUsersListPathParams 
    QueryParams CloudidentityDevicesDeviceUsersListQueryParams 
    Security CloudidentityDevicesDeviceUsersListSecurity 
    
}

type CloudidentityDevicesDeviceUsersListResponse struct {
    ContentType string 
    GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse *shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse 
    StatusCode int64 
    
}

