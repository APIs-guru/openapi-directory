package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDomainRecordPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
	RecordID int64 `pathParam:"style=simple,explode=false,name=recordId"`
}

type DeleteDomainRecordSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDomainRecordSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteDomainRecordSecurity struct {
	Option1 *DeleteDomainRecordSecurityOption1 `security:"option"`
	Option2 *DeleteDomainRecordSecurityOption2 `security:"option"`
}

type DeleteDomainRecordRequest struct {
	PathParams DeleteDomainRecordPathParams
	Security   DeleteDomainRecordSecurity
}

type DeleteDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteDomainRecordResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteDomainRecord200ApplicationJSONObject     map[string]interface{}
	DeleteDomainRecordDefaultApplicationJSONObject *DeleteDomainRecordDefaultApplicationJSON
}
