package shared

type DomainStatusEnum string

const (
	DomainStatusEnumDisabled DomainStatusEnum = "disabled"
	DomainStatusEnumActive   DomainStatusEnum = "active"
)

type DomainTypeEnum string

const (
	DomainTypeEnumMaster DomainTypeEnum = "master"
	DomainTypeEnumSlave  DomainTypeEnum = "slave"
)

// DomainInput
// A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
type DomainInput struct {
	AxfrIps     []string          `json:"axfr_ips,omitempty"`
	Description *string           `json:"description,omitempty"`
	Domain      *string           `json:"domain,omitempty"`
	ExpireSec   *int64            `json:"expire_sec,omitempty"`
	Group       *string           `json:"group,omitempty"`
	MasterIps   []string          `json:"master_ips,omitempty"`
	RefreshSec  *int64            `json:"refresh_sec,omitempty"`
	RetrySec    *int64            `json:"retry_sec,omitempty"`
	SoaEmail    *string           `json:"soa_email,omitempty"`
	Status      *DomainStatusEnum `json:"status,omitempty"`
	Tags        []string          `json:"tags,omitempty"`
	TTLSec      *int64            `json:"ttl_sec,omitempty"`
	Type        *DomainTypeEnum   `json:"type,omitempty"`
}

// Domain
// A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
type Domain struct {
	AxfrIps     []string          `json:"axfr_ips,omitempty"`
	Description *string           `json:"description,omitempty"`
	Domain      *string           `json:"domain,omitempty"`
	ExpireSec   *int64            `json:"expire_sec,omitempty"`
	Group       *string           `json:"group,omitempty"`
	ID          *int64            `json:"id,omitempty"`
	MasterIps   []string          `json:"master_ips,omitempty"`
	RefreshSec  *int64            `json:"refresh_sec,omitempty"`
	RetrySec    *int64            `json:"retry_sec,omitempty"`
	SoaEmail    *string           `json:"soa_email,omitempty"`
	Status      *DomainStatusEnum `json:"status,omitempty"`
	Tags        []string          `json:"tags,omitempty"`
	TTLSec      *int64            `json:"ttl_sec,omitempty"`
	Type        *DomainTypeEnum   `json:"type,omitempty"`
}
