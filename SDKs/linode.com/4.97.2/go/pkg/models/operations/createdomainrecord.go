package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateDomainRecordPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
}

type CreateDomainRecordRequestBodyTagEnum string

const (
	CreateDomainRecordRequestBodyTagEnumIssue     CreateDomainRecordRequestBodyTagEnum = "issue"
	CreateDomainRecordRequestBodyTagEnumIssuewild CreateDomainRecordRequestBodyTagEnum = "issuewild"
	CreateDomainRecordRequestBodyTagEnumIodef     CreateDomainRecordRequestBodyTagEnum = "iodef"
)

type CreateDomainRecordRequestBodyTypeEnum string

const (
	CreateDomainRecordRequestBodyTypeEnumA     CreateDomainRecordRequestBodyTypeEnum = "A"
	CreateDomainRecordRequestBodyTypeEnumAaaa  CreateDomainRecordRequestBodyTypeEnum = "AAAA"
	CreateDomainRecordRequestBodyTypeEnumNs    CreateDomainRecordRequestBodyTypeEnum = "NS"
	CreateDomainRecordRequestBodyTypeEnumMx    CreateDomainRecordRequestBodyTypeEnum = "MX"
	CreateDomainRecordRequestBodyTypeEnumCname CreateDomainRecordRequestBodyTypeEnum = "CNAME"
	CreateDomainRecordRequestBodyTypeEnumTxt   CreateDomainRecordRequestBodyTypeEnum = "TXT"
	CreateDomainRecordRequestBodyTypeEnumSrv   CreateDomainRecordRequestBodyTypeEnum = "SRV"
	CreateDomainRecordRequestBodyTypeEnumPtr   CreateDomainRecordRequestBodyTypeEnum = "PTR"
	CreateDomainRecordRequestBodyTypeEnumCaa   CreateDomainRecordRequestBodyTypeEnum = "CAA"
)

type CreateDomainRecordRequestBody struct {
	Created  *time.Time                            `json:"created"`
	ID       *int64                                `json:"id"`
	Name     *string                               `json:"name"`
	Port     *int64                                `json:"port"`
	Priority *int64                                `json:"priority"`
	Protocol *string                               `json:"protocol"`
	Service  *string                               `json:"service"`
	Tag      *CreateDomainRecordRequestBodyTagEnum `json:"tag"`
	Target   *string                               `json:"target"`
	TTLSec   *int64                                `json:"ttl_sec"`
	Type     CreateDomainRecordRequestBodyTypeEnum `json:"type"`
	Updated  *time.Time                            `json:"updated"`
	Weight   *int64                                `json:"weight"`
}

type CreateDomainRecordSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateDomainRecordSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateDomainRecordSecurity struct {
	Option1 *CreateDomainRecordSecurityOption1 `security:"option"`
	Option2 *CreateDomainRecordSecurityOption2 `security:"option"`
}

type CreateDomainRecordRequest struct {
	PathParams CreateDomainRecordPathParams
	Request    CreateDomainRecordRequestBody `request:"mediaType=application/json"`
	Security   CreateDomainRecordSecurity
}

type CreateDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateDomainRecordResponse struct {
	ContentType                                    string
	DomainRecord                                   *shared.DomainRecord
	StatusCode                                     int64
	CreateDomainRecordDefaultApplicationJSONObject *CreateDomainRecordDefaultApplicationJSON
}
