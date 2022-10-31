package operations

import (
"openapi/pkg/models/shared")

type CloudidentityDevicesDeviceUsersClientStatesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudidentityDevicesDeviceUsersClientStatesListQueryParams struct {
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
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesDeviceUsersClientStatesListSecurity struct {
    Option1 *CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 `security:"option"`
    Option2 *CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 `security:"option"`
    
}

type CloudidentityDevicesDeviceUsersClientStatesListRequest struct {
    PathParams CloudidentityDevicesDeviceUsersClientStatesListPathParams 
    QueryParams CloudidentityDevicesDeviceUsersClientStatesListQueryParams 
    Security CloudidentityDevicesDeviceUsersClientStatesListSecurity 
    
}

type CloudidentityDevicesDeviceUsersClientStatesListResponse struct {
    ContentType string 
    GoogleAppsCloudidentityDevicesV1ListClientStatesResponse *shared.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse 
    StatusCode int64 
    
}

