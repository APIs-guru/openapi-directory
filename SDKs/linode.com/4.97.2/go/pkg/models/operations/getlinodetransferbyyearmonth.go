package operations

import (
"openapi/pkg/models/shared")

type GetLinodeTransferByYearMonthPathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    Month int64 `pathParam:"style=simple,explode=false,name=month"`
    Year int64 `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetLinodeTransferByYearMonthSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLinodeTransferByYearMonthSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetLinodeTransferByYearMonthSecurity struct {
    Option1 *GetLinodeTransferByYearMonthSecurityOption1 `security:"option"`
    Option2 *GetLinodeTransferByYearMonthSecurityOption2 `security:"option"`
    
}

type GetLinodeTransferByYearMonthRequest struct {
    PathParams GetLinodeTransferByYearMonthPathParams 
    Security GetLinodeTransferByYearMonthSecurity 
    
}

type GetLinodeTransferByYearMonthDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLinodeTransferByYearMonthResponse struct {
    ContentType string 
    StatusCode int64 
    GetLinodeTransferByYearMonth200ApplicationJSONAny *interface{} 
    GetLinodeTransferByYearMonthDefaultApplicationJSONObject *GetLinodeTransferByYearMonthDefaultApplicationJSON 
    
}

