package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceTransferPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DeleteServiceTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteServiceTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteServiceTransferRequest struct {
	PathParams DeleteServiceTransferPathParams
	Security   DeleteServiceTransferSecurity
}

type DeleteServiceTransferResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	DeleteServiceTransfer200ApplicationJSONObject     map[string]interface{}
	DeleteServiceTransferDefaultApplicationJSONObject *DeleteServiceTransferDefaultApplicationJSON
}
