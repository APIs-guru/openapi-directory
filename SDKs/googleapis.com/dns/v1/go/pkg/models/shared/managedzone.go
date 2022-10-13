package shared

type ManagedZoneVisibilityEnum string

const (
	ManagedZoneVisibilityEnumPublic  ManagedZoneVisibilityEnum = "public"
	ManagedZoneVisibilityEnumPrivate ManagedZoneVisibilityEnum = "private"
)

type ManagedZone struct {
	CloudLoggingConfig      *ManagedZoneCloudLoggingConfig      `json:"cloudLoggingConfig"`
	CreationTime            *string                             `json:"creationTime"`
	Description             *string                             `json:"description"`
	DNSName                 *string                             `json:"dnsName"`
	DnssecConfig            *ManagedZoneDNSSecConfig            `json:"dnssecConfig"`
	ForwardingConfig        *ManagedZoneForwardingConfig        `json:"forwardingConfig"`
	ID                      *string                             `json:"id"`
	Kind                    *string                             `json:"kind"`
	Labels                  map[string]string                   `json:"labels"`
	Name                    *string                             `json:"name"`
	NameServerSet           *string                             `json:"nameServerSet"`
	NameServers             []string                            `json:"nameServers"`
	PeeringConfig           *ManagedZonePeeringConfig           `json:"peeringConfig"`
	PrivateVisibilityConfig *ManagedZonePrivateVisibilityConfig `json:"privateVisibilityConfig"`
	ReverseLookupConfig     *ManagedZoneReverseLookupConfig     `json:"reverseLookupConfig"`
	ServiceDirectoryConfig  *ManagedZoneServiceDirectoryConfig  `json:"serviceDirectoryConfig"`
	Visibility              *ManagedZoneVisibilityEnum          `json:"visibility"`
}
