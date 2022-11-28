package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDomainPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
}

type DeleteDomainSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteDomainDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteDomainRequest struct {
	PathParams DeleteDomainPathParams
	Security   DeleteDomainSecurity
}

type DeleteDomainResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteDomain200ApplicationJSONObject     map[string]interface{}
	DeleteDomainDefaultApplicationJSONObject *DeleteDomainDefaultApplicationJSON
}
