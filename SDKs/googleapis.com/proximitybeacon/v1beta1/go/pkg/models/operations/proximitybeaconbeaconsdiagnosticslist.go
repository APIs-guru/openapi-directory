package operations

import (
"openapi/pkg/models/shared")

type ProximitybeaconBeaconsDiagnosticsListPathParams struct {
    BeaconName string `pathParam:"style=simple,explode=false,name=beaconName"`
    
}


type ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum string

const (
    ProximitybeaconBeaconsDiagnosticsListAlertFilterEnumAlertUnspecified ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum = "ALERT_UNSPECIFIED"
ProximitybeaconBeaconsDiagnosticsListAlertFilterEnumWrongLocation ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum = "WRONG_LOCATION"
ProximitybeaconBeaconsDiagnosticsListAlertFilterEnumLowBattery ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum = "LOW_BATTERY"
ProximitybeaconBeaconsDiagnosticsListAlertFilterEnumLowActivity ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum = "LOW_ACTIVITY"
)


type ProximitybeaconBeaconsDiagnosticsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AlertFilter *ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum `queryParam:"style=form,explode=true,name=alertFilter"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ProximitybeaconBeaconsDiagnosticsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ProximitybeaconBeaconsDiagnosticsListRequest struct {
    PathParams ProximitybeaconBeaconsDiagnosticsListPathParams 
    QueryParams ProximitybeaconBeaconsDiagnosticsListQueryParams 
    Security ProximitybeaconBeaconsDiagnosticsListSecurity 
    
}

type ProximitybeaconBeaconsDiagnosticsListResponse struct {
    ContentType string 
    ListDiagnosticsResponse *shared.ListDiagnosticsResponse 
    StatusCode int64 
    
}

