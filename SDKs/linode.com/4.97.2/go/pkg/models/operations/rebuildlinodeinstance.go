package operations

import (
	"openapi/pkg/models/shared"
)

type RebuildLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RebuildLinodeInstanceRequestBody struct {
	AuthorizedKeys  []string               `json:"authorized_keys,omitempty"`
	AuthorizedUsers []string               `json:"authorized_users,omitempty"`
	Booted          *bool                  `json:"booted,omitempty"`
	Image           string                 `json:"image"`
	RootPass        string                 `json:"root_pass"`
	StackscriptData map[string]interface{} `json:"stackscript_data,omitempty"`
	StackscriptID   *int64                 `json:"stackscript_id,omitempty"`
}

type RebuildLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type RebuildLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RebuildLinodeInstanceRequest struct {
	PathParams RebuildLinodeInstancePathParams
	Request    RebuildLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   RebuildLinodeInstanceSecurity
}

type RebuildLinodeInstanceResponse struct {
	ContentType                                       string
	Linode                                            *shared.Linode
	StatusCode                                        int64
	RebuildLinodeInstanceDefaultApplicationJSONObject *RebuildLinodeInstanceDefaultApplicationJSON
}
