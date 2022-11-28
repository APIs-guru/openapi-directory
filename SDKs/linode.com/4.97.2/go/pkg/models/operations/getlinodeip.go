package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeIPPathParams struct {
	Address  string `pathParam:"style=simple,explode=false,name=address"`
	LinodeID int64  `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeIPRequest struct {
	PathParams GetLinodeIPPathParams
	Security   GetLinodeIPSecurity
}

type GetLinodeIPResponse struct {
	ContentType                             string
	IPAddress                               *shared.IPAddress
	StatusCode                              int64
	GetLinodeIPDefaultApplicationJSONObject *GetLinodeIPDefaultApplicationJSON
}
