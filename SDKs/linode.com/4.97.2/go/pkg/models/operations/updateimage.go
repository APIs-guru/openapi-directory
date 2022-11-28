package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePathParams struct {
	ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
}

type UpdateImageSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateImageRequest struct {
	PathParams UpdateImagePathParams
	Request    shared.ImagePrivateInput `request:"mediaType=application/json"`
	Security   UpdateImageSecurity
}

type UpdateImageResponse struct {
	ContentType                             string
	ImagePrivate                            *shared.ImagePrivate
	StatusCode                              int64
	UpdateImageDefaultApplicationJSONObject *UpdateImageDefaultApplicationJSON
}
