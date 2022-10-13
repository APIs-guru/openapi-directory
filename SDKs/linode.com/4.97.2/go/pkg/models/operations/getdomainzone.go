package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainZonePathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainZoneSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDomainZoneSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetDomainZoneSecurity struct {
	Option1 *GetDomainZoneSecurityOption1 `security:"option"`
	Option2 *GetDomainZoneSecurityOption2 `security:"option"`
}

type GetDomainZoneRequest struct {
	PathParams GetDomainZonePathParams
	Security   GetDomainZoneSecurity
}

type GetDomainZoneDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetDomainZoneResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetDomainZone200ApplicationJSONAny        *interface{}
	GetDomainZoneDefaultApplicationJSONObject *GetDomainZoneDefaultApplicationJSON
}
