package shared




type DomainResourceStateEnum string

const (
    DomainResourceStateEnumResourceStateUnspecified DomainResourceStateEnum = "RESOURCE_STATE_UNSPECIFIED"
DomainResourceStateEnumImportable DomainResourceStateEnum = "IMPORTABLE"
DomainResourceStateEnumUnsupported DomainResourceStateEnum = "UNSUPPORTED"
DomainResourceStateEnumSuspended DomainResourceStateEnum = "SUSPENDED"
DomainResourceStateEnumExpired DomainResourceStateEnum = "EXPIRED"
DomainResourceStateEnumDeleted DomainResourceStateEnum = "DELETED"
)


type Domain struct {
    DomainName *string `json:"domainName,omitempty"`
    ResourceState *DomainResourceStateEnum `json:"resourceState,omitempty"`
    YearlyPrice *Money `json:"yearlyPrice,omitempty"`
    
}

