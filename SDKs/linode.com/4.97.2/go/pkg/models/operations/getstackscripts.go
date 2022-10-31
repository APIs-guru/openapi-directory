package operations

import (
	"openapi/pkg/models/shared"
)

type GetStackScriptsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetStackScriptsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetStackScriptsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetStackScriptsSecurity struct {
	Option1 *GetStackScriptsSecurityOption1 `security:"option"`
	Option2 *GetStackScriptsSecurityOption2 `security:"option"`
}

type GetStackScriptsRequest struct {
	QueryParams GetStackScriptsQueryParams
	Security    GetStackScriptsSecurity
}

type GetStackScripts200ApplicationJSON struct {
	Data    []shared.StackScript `json:"data,omitempty"`
	Page    *int64               `json:"page,omitempty"`
	Pages   *int64               `json:"pages,omitempty"`
	Results *int64               `json:"results,omitempty"`
}

type GetStackScriptsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetStackScriptsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetStackScripts200ApplicationJSONObject     *GetStackScripts200ApplicationJSON
	GetStackScriptsDefaultApplicationJSONObject *GetStackScriptsDefaultApplicationJSON
}
