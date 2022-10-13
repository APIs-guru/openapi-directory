package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEntityTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DeleteEntityTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteEntityTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteEntityTransferSecurity struct {
	Option1 *DeleteEntityTransferSecurityOption1 `security:"option"`
	Option2 *DeleteEntityTransferSecurityOption2 `security:"option"`
}

type DeleteEntityTransferRequest struct {
	PathParams DeleteEntityTransferPathParams
	Security   DeleteEntityTransferSecurity
}

type DeleteEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteEntityTransferResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteEntityTransfer200ApplicationJSONObject     map[string]interface{}
	DeleteEntityTransferDefaultApplicationJSONObject *DeleteEntityTransferDefaultApplicationJSON
}
