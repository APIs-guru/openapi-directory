package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetDomainRequest struct {
	PathParams GetDomainPathParams
	Security   GetDomainSecurity
}

type GetDomainResponse struct {
	ContentType                           string
	Domain                                *shared.Domain
	StatusCode                            int64
	GetDomainDefaultApplicationJSONObject *GetDomainDefaultApplicationJSON
}
