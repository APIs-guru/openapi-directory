package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
}

type UpdateDomainSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateDomainRequest struct {
	PathParams UpdateDomainPathParams
	Request    shared.DomainInput `request:"mediaType=application/json"`
	Security   UpdateDomainSecurity
}

type UpdateDomainResponse struct {
	ContentType                              string
	Domain                                   *shared.Domain
	StatusCode                               int64
	UpdateDomainDefaultApplicationJSONObject *UpdateDomainDefaultApplicationJSON
}
