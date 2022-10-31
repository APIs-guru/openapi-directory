package shared

type ManagedZoneDNSSecConfigNonExistenceEnum string

const (
	ManagedZoneDNSSecConfigNonExistenceEnumNsec  ManagedZoneDNSSecConfigNonExistenceEnum = "nsec"
	ManagedZoneDNSSecConfigNonExistenceEnumNsec3 ManagedZoneDNSSecConfigNonExistenceEnum = "nsec3"
)

type ManagedZoneDNSSecConfigStateEnum string

const (
	ManagedZoneDNSSecConfigStateEnumOff      ManagedZoneDNSSecConfigStateEnum = "off"
	ManagedZoneDNSSecConfigStateEnumOn       ManagedZoneDNSSecConfigStateEnum = "on"
	ManagedZoneDNSSecConfigStateEnumTransfer ManagedZoneDNSSecConfigStateEnum = "transfer"
)

type ManagedZoneDNSSecConfig struct {
	DefaultKeySpecs []DNSKeySpec                             `json:"defaultKeySpecs,omitempty"`
	Kind            *string                                  `json:"kind,omitempty"`
	NonExistence    *ManagedZoneDNSSecConfigNonExistenceEnum `json:"nonExistence,omitempty"`
	State           *ManagedZoneDNSSecConfigStateEnum        `json:"state,omitempty"`
}
