package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeIPsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeIPsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeIPsRequest struct {
	PathParams GetLinodeIPsPathParams
	Security   GetLinodeIPsSecurity
}

type GetLinodeIPsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetLinodeIPs200ApplicationJSONAny        *interface{}
	GetLinodeIPsDefaultApplicationJSONObject *GetLinodeIPsDefaultApplicationJSON
}
