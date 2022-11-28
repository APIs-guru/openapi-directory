package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLinodeIPPathParams struct {
	Address  string `pathParam:"style=simple,explode=false,name=address"`
	LinodeID int64  `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateLinodeIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateLinodeIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateLinodeIPRequest struct {
	PathParams UpdateLinodeIPPathParams
	Request    *shared.IPAddressInput `request:"mediaType=application/json"`
	Security   UpdateLinodeIPSecurity
}

type UpdateLinodeIPResponse struct {
	ContentType                                string
	IPAddress                                  *shared.IPAddress
	StatusCode                                 int64
	UpdateLinodeIPDefaultApplicationJSONObject *UpdateLinodeIPDefaultApplicationJSON
}
