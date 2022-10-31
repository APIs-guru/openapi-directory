package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImagePathParams struct {
	ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
}

type DeleteImageSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteImageSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteImageSecurity struct {
	Option1 *DeleteImageSecurityOption1 `security:"option"`
	Option2 *DeleteImageSecurityOption2 `security:"option"`
}

type DeleteImageRequest struct {
	PathParams DeleteImagePathParams
	Security   DeleteImageSecurity
}

type DeleteImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteImageResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteImage200ApplicationJSONObject     map[string]interface{}
	DeleteImageDefaultApplicationJSONObject *DeleteImageDefaultApplicationJSON
}
