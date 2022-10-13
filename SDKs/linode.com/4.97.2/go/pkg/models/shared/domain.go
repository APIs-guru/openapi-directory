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

type Domain struct {
	AxfrIps     []string          `json:"axfr_ips"`
	Description *string           `json:"description"`
	Domain      *string           `json:"domain"`
	ExpireSec   *int64            `json:"expire_sec"`
	Group       *string           `json:"group"`
	ID          *int64            `json:"id"`
	MasterIps   []string          `json:"master_ips"`
	RefreshSec  *int64            `json:"refresh_sec"`
	RetrySec    *int64            `json:"retry_sec"`
	SoaEmail    *string           `json:"soa_email"`
	Status      *DomainStatusEnum `json:"status"`
	Tags        []string          `json:"tags"`
	TTLSec      *int64            `json:"ttl_sec"`
	Type        *DomainTypeEnum   `json:"type"`
}
