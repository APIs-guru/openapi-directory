package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptEntityTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type AcceptEntityTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type AcceptEntityTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AcceptEntityTransferSecurity struct {
	Option1 *AcceptEntityTransferSecurityOption1 `security:"option"`
	Option2 *AcceptEntityTransferSecurityOption2 `security:"option"`
}

type AcceptEntityTransferRequest struct {
	PathParams AcceptEntityTransferPathParams
	Security   AcceptEntityTransferSecurity
}

type AcceptEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type AcceptEntityTransferResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	AcceptEntityTransfer200ApplicationJSONObject     map[string]interface{}
	AcceptEntityTransferDefaultApplicationJSONObject *AcceptEntityTransferDefaultApplicationJSON
}
