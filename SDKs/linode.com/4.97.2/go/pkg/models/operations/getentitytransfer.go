package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntityTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type GetEntityTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetEntityTransferRequest struct {
	PathParams GetEntityTransferPathParams
	Security   GetEntityTransferSecurity
}

type GetEntityTransferResponse struct {
	ContentType                                   string
	EntityTransfer                                *shared.EntityTransfer
	StatusCode                                    int64
	GetEntityTransferDefaultApplicationJSONObject *GetEntityTransferDefaultApplicationJSON
}
