package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateLinodeInstanceRequest struct {
	PathParams UpdateLinodeInstancePathParams
	Request    shared.LinodeInput `request:"mediaType=application/json"`
	Security   UpdateLinodeInstanceSecurity
}

type UpdateLinodeInstanceResponse struct {
	ContentType                                      string
	Linode                                           *shared.Linode
	StatusCode                                       int64
	UpdateLinodeInstanceDefaultApplicationJSONObject *UpdateLinodeInstanceDefaultApplicationJSON
}
