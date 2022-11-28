package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveLinodeIPPathParams struct {
	Address  string `pathParam:"style=simple,explode=false,name=address"`
	LinodeID int64  `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RemoveLinodeIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type RemoveLinodeIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RemoveLinodeIPRequest struct {
	PathParams RemoveLinodeIPPathParams
	Security   RemoveLinodeIPSecurity
}

type RemoveLinodeIPResponse struct {
	ContentType                                string
	StatusCode                                 int64
	RemoveLinodeIP200ApplicationJSONObject     map[string]interface{}
	RemoveLinodeIPDefaultApplicationJSONObject *RemoveLinodeIPDefaultApplicationJSON
}
