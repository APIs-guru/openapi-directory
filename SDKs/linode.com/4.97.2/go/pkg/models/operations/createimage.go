package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateImageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateImageRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreateImageSecurity
}

type CreateImageResponse struct {
	ContentType                             string
	ImagePrivate                            *shared.ImagePrivate
	StatusCode                              int64
	CreateImageDefaultApplicationJSONObject *CreateImageDefaultApplicationJSON
}
