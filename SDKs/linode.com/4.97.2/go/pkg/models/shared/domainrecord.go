package shared

import (
"time")


type DomainRecordTagEnum string

const (
    DomainRecordTagEnumIssue DomainRecordTagEnum = "issue"
DomainRecordTagEnumIssuewild DomainRecordTagEnum = "issuewild"
DomainRecordTagEnumIodef DomainRecordTagEnum = "iodef"
)



type DomainRecordTypeEnum string

const (
    DomainRecordTypeEnumA DomainRecordTypeEnum = "A"
DomainRecordTypeEnumAaaa DomainRecordTypeEnum = "AAAA"
DomainRecordTypeEnumNs DomainRecordTypeEnum = "NS"
DomainRecordTypeEnumMx DomainRecordTypeEnum = "MX"
DomainRecordTypeEnumCname DomainRecordTypeEnum = "CNAME"
DomainRecordTypeEnumTxt DomainRecordTypeEnum = "TXT"
DomainRecordTypeEnumSrv DomainRecordTypeEnum = "SRV"
DomainRecordTypeEnumPtr DomainRecordTypeEnum = "PTR"
DomainRecordTypeEnumCaa DomainRecordTypeEnum = "CAA"
)


type DomainRecord struct {
    Created *time.Time `json:"created,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Priority *int64 `json:"priority,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    Service *string `json:"service,omitempty"`
    Tag *DomainRecordTagEnum `json:"tag,omitempty"`
    Target *string `json:"target,omitempty"`
    TTLSec *int64 `json:"ttl_sec,omitempty"`
    Type *DomainRecordTypeEnum `json:"type,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    Weight *int64 `json:"weight,omitempty"`
    
}

