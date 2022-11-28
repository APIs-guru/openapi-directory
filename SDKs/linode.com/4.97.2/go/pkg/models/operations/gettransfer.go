package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTransferRequest struct {
	Security GetTransferSecurity
}

type GetTransferResponse struct {
	ContentType                             string
	StatusCode                              int64
	Transfer                                *shared.Transfer
	GetTransferDefaultApplicationJSONObject *GetTransferDefaultApplicationJSON
}
