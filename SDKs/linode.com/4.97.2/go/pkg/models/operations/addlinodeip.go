package operations

import (
	"openapi/pkg/models/shared"
)

type AddLinodeIPPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type AddLinodeIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AddLinodeIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AddLinodeIPRequest struct {
	PathParams AddLinodeIPPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   AddLinodeIPSecurity
}

type AddLinodeIPResponse struct {
	ContentType                             string
	IPAddress                               *shared.IPAddress
	StatusCode                              int64
	AddLinodeIPDefaultApplicationJSONObject *AddLinodeIPDefaultApplicationJSON
}
