package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagPathParams struct {
	Label string `pathParam:"style=simple,explode=false,name=label"`
}

type DeleteTagSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteTagDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
	Security   DeleteTagSecurity
}

type DeleteTagResponse struct {
	ContentType                           string
	StatusCode                            int64
	DeleteTag200ApplicationJSONObject     map[string]interface{}
	DeleteTagDefaultApplicationJSONObject *DeleteTagDefaultApplicationJSON
}
