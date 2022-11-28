package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagRequestBody struct {
	Domains       []int64 `json:"domains,omitempty"`
	Label         string  `json:"label"`
	Linodes       []int64 `json:"linodes,omitempty"`
	Nodebalancers []int64 `json:"nodebalancers,omitempty"`
	Volumes       []int64 `json:"volumes,omitempty"`
}

type CreateTagSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateTagDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateTagRequest struct {
	Request  *CreateTagRequestBody `request:"mediaType=application/json"`
	Security CreateTagSecurity
}

type CreateTagResponse struct {
	ContentType                           string
	StatusCode                            int64
	Tag                                   *shared.Tag
	CreateTagDefaultApplicationJSONObject *CreateTagDefaultApplicationJSON
}
