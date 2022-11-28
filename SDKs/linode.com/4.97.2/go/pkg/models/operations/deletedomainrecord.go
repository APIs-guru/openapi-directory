package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDomainRecordPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
	RecordID int64 `pathParam:"style=simple,explode=false,name=recordId"`
}

type DeleteDomainRecordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteDomainRecordRequest struct {
	PathParams DeleteDomainRecordPathParams
	Security   DeleteDomainRecordSecurity
}

type DeleteDomainRecordResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteDomainRecord200ApplicationJSONObject     map[string]interface{}
	DeleteDomainRecordDefaultApplicationJSONObject *DeleteDomainRecordDefaultApplicationJSON
}
