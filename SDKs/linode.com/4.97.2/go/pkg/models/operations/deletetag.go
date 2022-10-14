package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagPathParams struct {
	Label string `pathParam:"style=simple,explode=false,name=label"`
}

type DeleteTagSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteTagSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteTagSecurity struct {
	Option1 *DeleteTagSecurityOption1 `security:"option"`
	Option2 *DeleteTagSecurityOption2 `security:"option"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
	Security   DeleteTagSecurity
}

type DeleteTagDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteTagResponse struct {
	ContentType                           string
	StatusCode                            int64
	DeleteTag200ApplicationJSONObject     map[string]interface{}
	DeleteTagDefaultApplicationJSONObject *DeleteTagDefaultApplicationJSON
}
