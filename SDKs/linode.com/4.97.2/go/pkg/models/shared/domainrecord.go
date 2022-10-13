package shared

import (
	"time"
)

type DomainRecordTagEnum string

const (
	DomainRecordTagEnumIssue     DomainRecordTagEnum = "issue"
	DomainRecordTagEnumIssuewild DomainRecordTagEnum = "issuewild"
	DomainRecordTagEnumIodef     DomainRecordTagEnum = "iodef"
)

type DomainRecordTypeEnum string

const (
	DomainRecordTypeEnumA     DomainRecordTypeEnum = "A"
	DomainRecordTypeEnumAaaa  DomainRecordTypeEnum = "AAAA"
	DomainRecordTypeEnumNs    DomainRecordTypeEnum = "NS"
	DomainRecordTypeEnumMx    DomainRecordTypeEnum = "MX"
	DomainRecordTypeEnumCname DomainRecordTypeEnum = "CNAME"
	DomainRecordTypeEnumTxt   DomainRecordTypeEnum = "TXT"
	DomainRecordTypeEnumSrv   DomainRecordTypeEnum = "SRV"
	DomainRecordTypeEnumPtr   DomainRecordTypeEnum = "PTR"
	DomainRecordTypeEnumCaa   DomainRecordTypeEnum = "CAA"
)

type DomainRecord struct {
	Created  *time.Time            `json:"created"`
	ID       *int64                `json:"id"`
	Name     *string               `json:"name"`
	Port     *int64                `json:"port"`
	Priority *int64                `json:"priority"`
	Protocol *string               `json:"protocol"`
	Service  *string               `json:"service"`
	Tag      *DomainRecordTagEnum  `json:"tag"`
	Target   *string               `json:"target"`
	TTLSec   *int64                `json:"ttl_sec"`
	Type     *DomainRecordTypeEnum `json:"type"`
	Updated  *time.Time            `json:"updated"`
	Weight   *int64                `json:"weight"`
}
