package operations

import (
	"openapi/pkg/models/shared"
)

type CloneDomainPathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type CloneDomainRequestBody struct {
	Domain string `json:"domain"`
}

type CloneDomainSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CloneDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CloneDomainRequest struct {
	PathParams CloneDomainPathParams
	Request    CloneDomainRequestBody `request:"mediaType=application/json"`
	Security   CloneDomainSecurity
}

type CloneDomainResponse struct {
	ContentType                             string
	Domain                                  *shared.Domain
	StatusCode                              int64
	CloneDomainDefaultApplicationJSONObject *CloneDomainDefaultApplicationJSON
}
