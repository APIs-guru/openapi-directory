package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntityTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type GetEntityTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetEntityTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetEntityTransferSecurity struct {
	Option1 *GetEntityTransferSecurityOption1 `security:"option"`
	Option2 *GetEntityTransferSecurityOption2 `security:"option"`
}

type GetEntityTransferRequest struct {
	PathParams GetEntityTransferPathParams
	Security   GetEntityTransferSecurity
}

type GetEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetEntityTransferResponse struct {
	ContentType                                   string
	EntityTransfer                                *shared.EntityTransfer
	StatusCode                                    int64
	GetEntityTransferDefaultApplicationJSONObject *GetEntityTransferDefaultApplicationJSON
}
