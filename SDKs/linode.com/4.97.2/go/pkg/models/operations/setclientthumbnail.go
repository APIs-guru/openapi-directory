package operations

import (
	"openapi/pkg/models/shared"
)

type SetClientThumbnailPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type SetClientThumbnailSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type SetClientThumbnailSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type SetClientThumbnailSecurity struct {
	Option1 *SetClientThumbnailSecurityOption1 `security:"option"`
	Option2 *SetClientThumbnailSecurityOption2 `security:"option"`
}

type SetClientThumbnailRequest struct {
	PathParams SetClientThumbnailPathParams
	Request    []byte `request:"mediaType=image/png"`
	Security   SetClientThumbnailSecurity
}

type SetClientThumbnailDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type SetClientThumbnailResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	SetClientThumbnail200ApplicationJSONObject     map[string]interface{}
	SetClientThumbnailDefaultApplicationJSONObject *SetClientThumbnailDefaultApplicationJSON
}
