package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DeleteServiceTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteServiceTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteServiceTransferSecurity struct {
	Option1 *DeleteServiceTransferSecurityOption1 `security:"option"`
	Option2 *DeleteServiceTransferSecurityOption2 `security:"option"`
}

type DeleteServiceTransferRequest struct {
	PathParams DeleteServiceTransferPathParams
	Security   DeleteServiceTransferSecurity
}

type DeleteServiceTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteServiceTransferResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	DeleteServiceTransfer200ApplicationJSONObject     map[string]interface{}
	DeleteServiceTransferDefaultApplicationJSONObject *DeleteServiceTransferDefaultApplicationJSON
}
