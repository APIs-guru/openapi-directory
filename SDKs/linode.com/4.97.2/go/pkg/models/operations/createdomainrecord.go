package operations

import (
	"openapi/pkg/models/shared"
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

type CreateDomainRecordRequestBodyInput struct {
	Name     *string                               `json:"name,omitempty"`
	Port     *int64                                `json:"port,omitempty"`
	Priority *int64                                `json:"priority,omitempty"`
	Protocol *string                               `json:"protocol,omitempty"`
	Service  *string                               `json:"service,omitempty"`
	Tag      *CreateDomainRecordRequestBodyTagEnum `json:"tag,omitempty"`
	Target   *string                               `json:"target,omitempty"`
	TTLSec   *int64                                `json:"ttl_sec,omitempty"`
	Type     CreateDomainRecordRequestBodyTypeEnum `json:"type"`
	Weight   *int64                                `json:"weight,omitempty"`
}

type CreateDomainRecordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateDomainRecordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateDomainRecordRequest struct {
	PathParams CreateDomainRecordPathParams
	Request    CreateDomainRecordRequestBodyInput `request:"mediaType=application/json"`
	Security   CreateDomainRecordSecurity
}

type CreateDomainRecordResponse struct {
	ContentType                                    string
	DomainRecord                                   *shared.DomainRecord
	StatusCode                                     int64
	CreateDomainRecordDefaultApplicationJSONObject *CreateDomainRecordDefaultApplicationJSON
}
