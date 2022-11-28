package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEntityTransferRequestBody struct {
	Entities shared.Entities `json:"entities"`
}

type CreateEntityTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateEntityTransferRequest struct {
	Request  *CreateEntityTransferRequestBody `request:"mediaType=application/json"`
	Security CreateEntityTransferSecurity
}

type CreateEntityTransferResponse struct {
	ContentType                                      string
	EntityTransfer                                   *shared.EntityTransfer
	StatusCode                                       int64
	CreateEntityTransferDefaultApplicationJSONObject *CreateEntityTransferDefaultApplicationJSON
}
