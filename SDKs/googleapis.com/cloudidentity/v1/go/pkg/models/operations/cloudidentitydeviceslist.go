package operations

import (
"openapi/pkg/models/shared")


type CloudidentityDevicesListViewEnum string

const (
    CloudidentityDevicesListViewEnumViewUnspecified CloudidentityDevicesListViewEnum = "VIEW_UNSPECIFIED"
CloudidentityDevicesListViewEnumCompanyInventory CloudidentityDevicesListViewEnum = "COMPANY_INVENTORY"
CloudidentityDevicesListViewEnumUserAssignedDevices CloudidentityDevicesListViewEnum = "USER_ASSIGNED_DEVICES"
)


type CloudidentityDevicesListQueryParams struct {
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
    View *CloudidentityDevicesListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type CloudidentityDevicesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityDevicesListSecurity struct {
    Option1 *CloudidentityDevicesListSecurityOption1 `security:"option"`
    Option2 *CloudidentityDevicesListSecurityOption2 `security:"option"`
    
}

type CloudidentityDevicesListRequest struct {
    QueryParams CloudidentityDevicesListQueryParams 
    Security CloudidentityDevicesListSecurity 
    
}

type CloudidentityDevicesListResponse struct {
    ContentType string 
    GoogleAppsCloudidentityDevicesV1ListDevicesResponse *shared.GoogleAppsCloudidentityDevicesV1ListDevicesResponse 
    StatusCode int64 
    
}

