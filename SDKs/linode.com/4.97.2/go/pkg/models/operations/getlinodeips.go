package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeIPsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeIPsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeIPsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeIPsSecurity struct {
	Option1 *GetLinodeIPsSecurityOption1 `security:"option"`
	Option2 *GetLinodeIPsSecurityOption2 `security:"option"`
}

type GetLinodeIPsRequest struct {
	PathParams GetLinodeIPsPathParams
	Security   GetLinodeIPsSecurity
}

type GetLinodeIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeIPsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetLinodeIPs200ApplicationJSONAny        *interface{}
	GetLinodeIPsDefaultApplicationJSONObject *GetLinodeIPsDefaultApplicationJSON
}
