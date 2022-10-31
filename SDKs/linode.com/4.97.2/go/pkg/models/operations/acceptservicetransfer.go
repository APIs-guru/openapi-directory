package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptServiceTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type AcceptServiceTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type AcceptServiceTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AcceptServiceTransferSecurity struct {
	Option1 *AcceptServiceTransferSecurityOption1 `security:"option"`
	Option2 *AcceptServiceTransferSecurityOption2 `security:"option"`
}

type AcceptServiceTransferRequest struct {
	PathParams AcceptServiceTransferPathParams
	Security   AcceptServiceTransferSecurity
}

type AcceptServiceTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AcceptServiceTransferResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	AcceptServiceTransfer200ApplicationJSONObject     map[string]interface{}
	AcceptServiceTransferDefaultApplicationJSONObject *AcceptServiceTransferDefaultApplicationJSON
}
