package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainRecordPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
	RecordID int64 `pathParam:"style=simple,explode=false,name=recordId"`
}

type UpdateDomainRecordSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateDomainRecordSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateDomainRecordSecurity struct {
	Option1 *UpdateDomainRecordSecurityOption1 `security:"option"`
	Option2 *UpdateDomainRecordSecurityOption2 `security:"option"`
}

type UpdateDomainRecordRequest struct {
	PathParams UpdateDomainRecordPathParams
	Request    shared.DomainRecord `request:"mediaType=application/json"`
	Security   UpdateDomainRecordSecurity
}

type UpdateDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateDomainRecordResponse struct {
	ContentType                                    string
	DomainRecord                                   *shared.DomainRecord
	StatusCode                                     int64
	UpdateDomainRecordDefaultApplicationJSONObject *UpdateDomainRecordDefaultApplicationJSON
}
