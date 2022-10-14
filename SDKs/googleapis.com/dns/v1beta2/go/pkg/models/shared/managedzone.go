package shared

type ManagedZoneVisibilityEnum string

const (
	ManagedZoneVisibilityEnumPublic  ManagedZoneVisibilityEnum = "public"
	ManagedZoneVisibilityEnumPrivate ManagedZoneVisibilityEnum = "private"
)

type ManagedZone struct {
	CloudLoggingConfig      *ManagedZoneCloudLoggingConfig      `json:"cloudLoggingConfig,omitempty"`
	CreationTime            *string                             `json:"creationTime,omitempty"`
	Description             *string                             `json:"description,omitempty"`
	DNSName                 *string                             `json:"dnsName,omitempty"`
	DnssecConfig            *ManagedZoneDNSSecConfig            `json:"dnssecConfig,omitempty"`
	ForwardingConfig        *ManagedZoneForwardingConfig        `json:"forwardingConfig,omitempty"`
	ID                      *string                             `json:"id,omitempty"`
	Kind                    *string                             `json:"kind,omitempty"`
	Labels                  map[string]string                   `json:"labels,omitempty"`
	Name                    *string                             `json:"name,omitempty"`
	NameServerSet           *string                             `json:"nameServerSet,omitempty"`
	NameServers             []string                            `json:"nameServers,omitempty"`
	PeeringConfig           *ManagedZonePeeringConfig           `json:"peeringConfig,omitempty"`
	PrivateVisibilityConfig *ManagedZonePrivateVisibilityConfig `json:"privateVisibilityConfig,omitempty"`
	ReverseLookupConfig     *ManagedZoneReverseLookupConfig     `json:"reverseLookupConfig,omitempty"`
	ServiceDirectoryConfig  *ManagedZoneServiceDirectoryConfig  `json:"serviceDirectoryConfig,omitempty"`
	Visibility              *ManagedZoneVisibilityEnum          `json:"visibility,omitempty"`
}
