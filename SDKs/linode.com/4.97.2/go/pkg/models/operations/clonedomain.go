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

type CloneDomainSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CloneDomainSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CloneDomainSecurity struct {
	Option1 *CloneDomainSecurityOption1 `security:"option"`
	Option2 *CloneDomainSecurityOption2 `security:"option"`
}

type CloneDomainRequest struct {
	PathParams CloneDomainPathParams
	Request    CloneDomainRequestBody `request:"mediaType=application/json"`
	Security   CloneDomainSecurity
}

type CloneDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CloneDomainResponse struct {
	ContentType                             string
	Domain                                  *shared.Domain
	StatusCode                              int64
	CloneDomainDefaultApplicationJSONObject *CloneDomainDefaultApplicationJSON
}
