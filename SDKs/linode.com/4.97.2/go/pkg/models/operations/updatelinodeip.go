package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLinodeIPPathParams struct {
	Address  string `pathParam:"style=simple,explode=false,name=address"`
	LinodeID int64  `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateLinodeIPSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateLinodeIPSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateLinodeIPSecurity struct {
	Option1 *UpdateLinodeIPSecurityOption1 `security:"option"`
	Option2 *UpdateLinodeIPSecurityOption2 `security:"option"`
}

type UpdateLinodeIPRequest struct {
	PathParams UpdateLinodeIPPathParams
	Request    *shared.IPAddress `request:"mediaType=application/json"`
	Security   UpdateLinodeIPSecurity
}

type UpdateLinodeIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateLinodeIPResponse struct {
	ContentType                                string
	IPAddress                                  *shared.IPAddress
	StatusCode                                 int64
	UpdateLinodeIPDefaultApplicationJSONObject *UpdateLinodeIPDefaultApplicationJSON
}
