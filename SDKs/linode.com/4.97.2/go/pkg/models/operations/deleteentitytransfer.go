package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEntityTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DeleteEntityTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteEntityTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteEntityTransferRequest struct {
	PathParams DeleteEntityTransferPathParams
	Security   DeleteEntityTransferSecurity
}

type DeleteEntityTransferResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteEntityTransfer200ApplicationJSONObject     map[string]interface{}
	DeleteEntityTransferDefaultApplicationJSONObject *DeleteEntityTransferDefaultApplicationJSON
}
