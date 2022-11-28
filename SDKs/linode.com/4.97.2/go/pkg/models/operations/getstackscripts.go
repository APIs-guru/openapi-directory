package operations

import (
	"openapi/pkg/models/shared"
)

type GetStackScriptsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetStackScriptsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
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

type GetStackScriptsRequest struct {
	QueryParams GetStackScriptsQueryParams
	Security    GetStackScriptsSecurity
}

type GetStackScriptsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetStackScripts200ApplicationJSONObject     *GetStackScripts200ApplicationJSON
	GetStackScriptsDefaultApplicationJSONObject *GetStackScriptsDefaultApplicationJSON
}
