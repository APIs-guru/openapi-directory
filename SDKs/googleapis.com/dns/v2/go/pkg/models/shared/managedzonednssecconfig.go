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
	DefaultKeySpecs []DNSKeySpec                             `json:"defaultKeySpecs"`
	Kind            *string                                  `json:"kind"`
	NonExistence    *ManagedZoneDNSSecConfigNonExistenceEnum `json:"nonExistence"`
	State           *ManagedZoneDNSSecConfigStateEnum        `json:"state"`
}
