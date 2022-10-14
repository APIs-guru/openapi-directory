package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePathParams struct {
	ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
}

type UpdateImageSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateImageSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateImageSecurity struct {
	Option1 *UpdateImageSecurityOption1 `security:"option"`
	Option2 *UpdateImageSecurityOption2 `security:"option"`
}

type UpdateImageRequest struct {
	PathParams UpdateImagePathParams
	Request    shared.ImagePrivate `request:"mediaType=application/json"`
	Security   UpdateImageSecurity
}

type UpdateImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateImageResponse struct {
	ContentType                             string
	ImagePrivate                            *shared.ImagePrivate
	StatusCode                              int64
	UpdateImageDefaultApplicationJSONObject *UpdateImageDefaultApplicationJSON
}
