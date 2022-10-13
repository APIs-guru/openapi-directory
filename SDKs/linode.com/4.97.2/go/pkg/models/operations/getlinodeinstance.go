package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeInstanceSecurity struct {
	Option1 *GetLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *GetLinodeInstanceSecurityOption2 `security:"option"`
}

type GetLinodeInstanceRequest struct {
	PathParams GetLinodeInstancePathParams
	Security   GetLinodeInstanceSecurity
}

type GetLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLinodeInstanceResponse struct {
	ContentType                                   string
	Linode                                        *shared.Linode
	StatusCode                                    int64
	GetLinodeInstanceDefaultApplicationJSONObject *GetLinodeInstanceDefaultApplicationJSON
}
