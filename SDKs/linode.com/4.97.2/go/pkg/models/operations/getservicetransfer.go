package operations

import (
"openapi/pkg/models/shared")

type GetServiceTransferPathParams struct {
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type GetServiceTransferSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetServiceTransferSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetServiceTransferSecurity struct {
    Option1 *GetServiceTransferSecurityOption1 `security:"option"`
    Option2 *GetServiceTransferSecurityOption2 `security:"option"`
    
}

type GetServiceTransferRequest struct {
    PathParams GetServiceTransferPathParams 
    Security GetServiceTransferSecurity 
    
}

type GetServiceTransferDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetServiceTransferResponse struct {
    ContentType string 
    ServiceTransfer *shared.ServiceTransfer 
    StatusCode int64 
    GetServiceTransferDefaultApplicationJSONObject *GetServiceTransferDefaultApplicationJSON 
    
}

