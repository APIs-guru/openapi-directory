package operations

import (
	"openapi/pkg/models/shared"
)

type SetClientThumbnailPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type SetClientThumbnailSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type SetClientThumbnailDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type SetClientThumbnailRequest struct {
	PathParams SetClientThumbnailPathParams
	Request    []byte `request:"mediaType=image/png"`
	Security   SetClientThumbnailSecurity
}

type SetClientThumbnailResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	SetClientThumbnail200ApplicationJSONObject     map[string]interface{}
	SetClientThumbnailDefaultApplicationJSONObject *SetClientThumbnailDefaultApplicationJSON
}
