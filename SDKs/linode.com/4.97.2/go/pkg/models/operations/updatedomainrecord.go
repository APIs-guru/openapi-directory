package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainRecordPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
	RecordID int64 `pathParam:"style=simple,explode=false,name=recordId"`
}

type UpdateDomainRecordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateDomainRecordRequest struct {
	PathParams UpdateDomainRecordPathParams
	Request    shared.DomainRecordInput `request:"mediaType=application/json"`
	Security   UpdateDomainRecordSecurity
}

type UpdateDomainRecordResponse struct {
	ContentType                                    string
	DomainRecord                                   *shared.DomainRecord
	StatusCode                                     int64
	UpdateDomainRecordDefaultApplicationJSONObject *UpdateDomainRecordDefaultApplicationJSON
}
