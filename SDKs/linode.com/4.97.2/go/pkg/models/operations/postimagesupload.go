package operations

import (
	"openapi/pkg/models/shared"
)

var PostImagesUploadServerList = []string{
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
}

type PostImagesUploadRequestBody struct {
	Description *string `json:"description,omitempty"`
	Label       string  `json:"label"`
	Region      string  `json:"region"`
}

type PostImagesUploadSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PostImagesUpload200ApplicationJSON struct {
	Image    *shared.ImagePrivate `json:"image,omitempty"`
	UploadTo *string              `json:"upload_to,omitempty"`
}

type PostImagesUploadDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type PostImagesUploadRequest struct {
	ServerURL *string
	Request   *PostImagesUploadRequestBody `request:"mediaType=application/json"`
	Security  PostImagesUploadSecurity
}

type PostImagesUploadResponse struct {
	ContentType                                  string
	PostImagesUpload200ApplicationJSONObject     *PostImagesUpload200ApplicationJSON
	PostImagesUploadDefaultApplicationJSONObject *PostImagesUploadDefaultApplicationJSON
	StatusCode                                   int64
}
