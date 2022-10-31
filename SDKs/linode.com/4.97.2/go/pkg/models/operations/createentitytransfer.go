package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEntityTransferRequestBody struct {
	Entities shared.Entities `json:"entities"`
}

type CreateEntityTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateEntityTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateEntityTransferSecurity struct {
	Option1 *CreateEntityTransferSecurityOption1 `security:"option"`
	Option2 *CreateEntityTransferSecurityOption2 `security:"option"`
}

type CreateEntityTransferRequest struct {
	Request  *CreateEntityTransferRequestBody `request:"mediaType=application/json"`
	Security CreateEntityTransferSecurity
}

type CreateEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateEntityTransferResponse struct {
	ContentType                                      string
	EntityTransfer                                   *shared.EntityTransfer
	StatusCode                                       int64
	CreateEntityTransferDefaultApplicationJSONObject *CreateEntityTransferDefaultApplicationJSON
}
