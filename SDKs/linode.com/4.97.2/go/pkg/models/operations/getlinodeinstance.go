package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeInstanceRequest struct {
	PathParams GetLinodeInstancePathParams
	Security   GetLinodeInstanceSecurity
}

type GetLinodeInstanceResponse struct {
	ContentType                                   string
	Linode                                        *shared.Linode
	StatusCode                                    int64
	GetLinodeInstanceDefaultApplicationJSONObject *GetLinodeInstanceDefaultApplicationJSON
}
