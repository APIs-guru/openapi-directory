package shared

type ManagedZoneDNSSecConfigNonExistenceEnum string

const (
	ManagedZoneDNSSecConfigNonExistenceEnumNsec  ManagedZoneDNSSecConfigNonExistenceEnum = "NSEC"
	ManagedZoneDNSSecConfigNonExistenceEnumNsec3 ManagedZoneDNSSecConfigNonExistenceEnum = "NSEC3"
)

type ManagedZoneDNSSecConfigStateEnum string

const (
	ManagedZoneDNSSecConfigStateEnumOff      ManagedZoneDNSSecConfigStateEnum = "OFF"
	ManagedZoneDNSSecConfigStateEnumOn       ManagedZoneDNSSecConfigStateEnum = "ON"
	ManagedZoneDNSSecConfigStateEnumTransfer ManagedZoneDNSSecConfigStateEnum = "TRANSFER"
)

type ManagedZoneDNSSecConfig struct {
	DefaultKeySpecs []DNSKeySpec                             `json:"defaultKeySpecs,omitempty"`
	Kind            *string                                  `json:"kind,omitempty"`
	NonExistence    *ManagedZoneDNSSecConfigNonExistenceEnum `json:"nonExistence,omitempty"`
	State           *ManagedZoneDNSSecConfigStateEnum        `json:"state,omitempty"`
}
