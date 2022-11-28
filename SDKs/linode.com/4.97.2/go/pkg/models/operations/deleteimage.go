package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImagePathParams struct {
	ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
}

type DeleteImageSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteImageRequest struct {
	PathParams DeleteImagePathParams
	Security   DeleteImageSecurity
}

type DeleteImageResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteImage200ApplicationJSONObject     map[string]interface{}
	DeleteImageDefaultApplicationJSONObject *DeleteImageDefaultApplicationJSON
}
