package operations

import (
	"openapi/pkg/models/shared"
)

type RebuildLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RebuildLinodeInstanceRequestBody struct {
	AuthorizedKeys  []string               `json:"authorized_keys"`
	AuthorizedUsers []string               `json:"authorized_users"`
	Booted          *bool                  `json:"booted"`
	Image           string                 `json:"image"`
	RootPass        string                 `json:"root_pass"`
	StackscriptData map[string]interface{} `json:"stackscript_data"`
	StackscriptID   *int64                 `json:"stackscript_id"`
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
	Errors []shared.ErrorObject `json:"errors"`
}

type RebuildLinodeInstanceResponse struct {
	ContentType                                       string
	Linode                                            *shared.Linode
	StatusCode                                        int64
	RebuildLinodeInstanceDefaultApplicationJSONObject *RebuildLinodeInstanceDefaultApplicationJSON
}
