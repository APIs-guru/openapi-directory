package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIPPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type UpdateIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateIPRequest struct {
	PathParams UpdateIPPathParams
	Request    shared.IPAddressInput `request:"mediaType=application/json"`
	Security   UpdateIPSecurity
}

type UpdateIPResponse struct {
	ContentType                          string
	IPAddress                            *shared.IPAddress
	StatusCode                           int64
	UpdateIPDefaultApplicationJSONObject *UpdateIPDefaultApplicationJSON
}
