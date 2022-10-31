package operations

import (
"openapi/pkg/models/shared")

type ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    
}

type ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrgUnitID *string `queryParam:"style=form,explode=true,name=orgUnitId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadMask *string `queryParam:"style=form,explode=true,name=readMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest struct {
    PathParams ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams 
    QueryParams ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams 
    Security ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity 
    
}

type ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse struct {
    ContentType string 
    GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse *shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse 
    StatusCode int64 
    
}

