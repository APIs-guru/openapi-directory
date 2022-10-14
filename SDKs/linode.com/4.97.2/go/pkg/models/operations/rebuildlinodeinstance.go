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

type RebuildLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RebuildLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RebuildLinodeInstanceSecurity struct {
	Option1 *RebuildLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *RebuildLinodeInstanceSecurityOption2 `security:"option"`
}

type RebuildLinodeInstanceRequest struct {
	PathParams RebuildLinodeInstancePathParams
	Request    RebuildLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   RebuildLinodeInstanceSecurity
}

type RebuildLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RebuildLinodeInstanceResponse struct {
	ContentType                                       string
	Linode                                            *shared.Linode
	StatusCode                                        int64
	RebuildLinodeInstanceDefaultApplicationJSONObject *RebuildLinodeInstanceDefaultApplicationJSON
}
