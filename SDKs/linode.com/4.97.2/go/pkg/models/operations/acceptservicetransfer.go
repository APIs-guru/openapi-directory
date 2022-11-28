package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptServiceTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type AcceptServiceTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AcceptServiceTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AcceptServiceTransferRequest struct {
	PathParams AcceptServiceTransferPathParams
	Security   AcceptServiceTransferSecurity
}

type AcceptServiceTransferResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	AcceptServiceTransfer200ApplicationJSONObject     map[string]interface{}
	AcceptServiceTransferDefaultApplicationJSONObject *AcceptServiceTransferDefaultApplicationJSON
}
