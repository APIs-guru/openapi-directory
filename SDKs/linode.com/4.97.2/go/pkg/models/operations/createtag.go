package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagRequestBody struct {
	Domains       []int64 `json:"domains"`
	Label         string  `json:"label"`
	Linodes       []int64 `json:"linodes"`
	Nodebalancers []int64 `json:"nodebalancers"`
	Volumes       []int64 `json:"volumes"`
}

type CreateTagSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateTagSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateTagSecurity struct {
	Option1 *CreateTagSecurityOption1 `security:"option"`
	Option2 *CreateTagSecurityOption2 `security:"option"`
}

type CreateTagRequest struct {
	Request  *CreateTagRequestBody `request:"mediaType=application/json"`
	Security CreateTagSecurity
}

type CreateTagDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateTagResponse struct {
	ContentType                           string
	StatusCode                            int64
	Tag                                   *shared.Tag
	CreateTagDefaultApplicationJSONObject *CreateTagDefaultApplicationJSON
}
