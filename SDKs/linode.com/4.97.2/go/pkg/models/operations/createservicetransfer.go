package operations

import (
"openapi/pkg/models/shared")

type CreateServiceTransferRequestBody struct {
    Entities shared.Entities `json:"entities"`
    
}

type CreateServiceTransferSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateServiceTransferSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateServiceTransferSecurity struct {
    Option1 *CreateServiceTransferSecurityOption1 `security:"option"`
    Option2 *CreateServiceTransferSecurityOption2 `security:"option"`
    
}

type CreateServiceTransferRequest struct {
    Request *CreateServiceTransferRequestBody `request:"mediaType=application/json"`
    Security CreateServiceTransferSecurity 
    
}

type CreateServiceTransferDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateServiceTransferResponse struct {
    ContentType string 
    ServiceTransfer *shared.ServiceTransfer 
    StatusCode int64 
    CreateServiceTransferDefaultApplicationJSONObject *CreateServiceTransferDefaultApplicationJSON 
    
}

