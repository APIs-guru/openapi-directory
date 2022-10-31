package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetTransferSecurity struct {
	Option1 *GetTransferSecurityOption1 `security:"option"`
	Option2 *GetTransferSecurityOption2 `security:"option"`
}

type GetTransferRequest struct {
	Security GetTransferSecurity
}

type GetTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTransferResponse struct {
	ContentType                             string
	StatusCode                              int64
	Transfer                                *shared.Transfer
	GetTransferDefaultApplicationJSONObject *GetTransferDefaultApplicationJSON
}
