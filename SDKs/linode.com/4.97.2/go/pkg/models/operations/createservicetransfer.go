package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceTransferRequestBody struct {
	Entities shared.Entities `json:"entities"`
}

type CreateServiceTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateServiceTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateServiceTransferRequest struct {
	Request  *CreateServiceTransferRequestBody `request:"mediaType=application/json"`
	Security CreateServiceTransferSecurity
}

type CreateServiceTransferResponse struct {
	ContentType                                       string
	ServiceTransfer                                   *shared.ServiceTransfer
	StatusCode                                        int64
	CreateServiceTransferDefaultApplicationJSONObject *CreateServiceTransferDefaultApplicationJSON
}
