package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainRecordPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
	RecordID int64 `pathParam:"style=simple,explode=false,name=recordId"`
}

type GetDomainRecordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetDomainRecordRequest struct {
	PathParams GetDomainRecordPathParams
	Security   GetDomainRecordSecurity
}

type GetDomainRecordResponse struct {
	ContentType                                 string
	DomainRecord                                *shared.DomainRecord
	StatusCode                                  int64
	GetDomainRecordDefaultApplicationJSONObject *GetDomainRecordDefaultApplicationJSON
}
