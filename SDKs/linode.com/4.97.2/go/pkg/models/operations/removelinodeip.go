package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveLinodeIPPathParams struct {
	Address  string `pathParam:"style=simple,explode=false,name=address"`
	LinodeID int64  `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RemoveLinodeIPSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RemoveLinodeIPSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RemoveLinodeIPSecurity struct {
	Option1 *RemoveLinodeIPSecurityOption1 `security:"option"`
	Option2 *RemoveLinodeIPSecurityOption2 `security:"option"`
}

type RemoveLinodeIPRequest struct {
	PathParams RemoveLinodeIPPathParams
	Security   RemoveLinodeIPSecurity
}

type RemoveLinodeIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RemoveLinodeIPResponse struct {
	ContentType                                string
	StatusCode                                 int64
	RemoveLinodeIP200ApplicationJSONObject     map[string]interface{}
	RemoveLinodeIPDefaultApplicationJSONObject *RemoveLinodeIPDefaultApplicationJSON
}
