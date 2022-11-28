package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainZonePathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainZoneSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetDomainZoneDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetDomainZoneRequest struct {
	PathParams GetDomainZonePathParams
	Security   GetDomainZoneSecurity
}

type GetDomainZoneResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetDomainZone200ApplicationJSONAny        *interface{}
	GetDomainZoneDefaultApplicationJSONObject *GetDomainZoneDefaultApplicationJSON
}
