package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDomainSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetDomainSecurity struct {
	Option1 *GetDomainSecurityOption1 `security:"option"`
	Option2 *GetDomainSecurityOption2 `security:"option"`
}

type GetDomainRequest struct {
	PathParams GetDomainPathParams
	Security   GetDomainSecurity
}

type GetDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetDomainResponse struct {
	ContentType                           string
	Domain                                *shared.Domain
	StatusCode                            int64
	GetDomainDefaultApplicationJSONObject *GetDomainDefaultApplicationJSON
}
