package operations

import (
"openapi/pkg/models/shared")

type GetLinodeTransferPathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type GetLinodeTransferSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLinodeTransferSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetLinodeTransferSecurity struct {
    Option1 *GetLinodeTransferSecurityOption1 `security:"option"`
    Option2 *GetLinodeTransferSecurityOption2 `security:"option"`
    
}

type GetLinodeTransferRequest struct {
    PathParams GetLinodeTransferPathParams 
    Security GetLinodeTransferSecurity 
    
}

type GetLinodeTransferDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLinodeTransferResponse struct {
    ContentType string 
    StatusCode int64 
    GetLinodeTransfer200ApplicationJSONAny *interface{} 
    GetLinodeTransferDefaultApplicationJSONObject *GetLinodeTransferDefaultApplicationJSON 
    
}

