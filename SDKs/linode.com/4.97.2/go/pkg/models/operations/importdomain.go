package operations

import (
	"openapi/pkg/models/shared"
)

type ImportDomainSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ImportDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ImportDomainRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security ImportDomainSecurity
}

type ImportDomainResponse struct {
	ContentType                              string
	Domain                                   *shared.Domain
	StatusCode                               int64
	ImportDomainDefaultApplicationJSONObject *ImportDomainDefaultApplicationJSON
}
