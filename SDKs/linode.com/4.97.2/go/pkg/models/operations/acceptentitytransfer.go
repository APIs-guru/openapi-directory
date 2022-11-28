package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptEntityTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type AcceptEntityTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AcceptEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AcceptEntityTransferRequest struct {
	PathParams AcceptEntityTransferPathParams
	Security   AcceptEntityTransferSecurity
}

type AcceptEntityTransferResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	AcceptEntityTransfer200ApplicationJSONObject     map[string]interface{}
	AcceptEntityTransferDefaultApplicationJSONObject *AcceptEntityTransferDefaultApplicationJSON
}
