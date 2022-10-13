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
	DefaultKeySpecs []DNSKeySpec                             `json:"defaultKeySpecs"`
	Kind            *string                                  `json:"kind"`
	NonExistence    *ManagedZoneDNSSecConfigNonExistenceEnum `json:"nonExistence"`
	State           *ManagedZoneDNSSecConfigStateEnum        `json:"state"`
}
