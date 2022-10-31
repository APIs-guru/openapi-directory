package shared

type ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum string

const (
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "DEFAULT"
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "PRIVATE"
)

type ManagedZoneForwardingConfigNameServerTarget struct {
	ForwardingPath *ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum `json:"forwardingPath,omitempty"`
	Ipv4Address    *string                                                        `json:"ipv4Address,omitempty"`
	Kind           *string                                                        `json:"kind,omitempty"`
}
