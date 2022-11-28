package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeTransferPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeTransferRequest struct {
	PathParams GetLinodeTransferPathParams
	Security   GetLinodeTransferSecurity
}

type GetLinodeTransferResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetLinodeTransfer200ApplicationJSONAny        *interface{}
	GetLinodeTransferDefaultApplicationJSONObject *GetLinodeTransferDefaultApplicationJSON
}
