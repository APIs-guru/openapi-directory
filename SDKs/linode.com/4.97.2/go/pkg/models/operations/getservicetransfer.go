package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type GetServiceTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetServiceTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetServiceTransferRequest struct {
	PathParams GetServiceTransferPathParams
	Security   GetServiceTransferSecurity
}

type GetServiceTransferResponse struct {
	ContentType                                    string
	ServiceTransfer                                *shared.ServiceTransfer
	StatusCode                                     int64
	GetServiceTransferDefaultApplicationJSONObject *GetServiceTransferDefaultApplicationJSON
}
