package shared

type ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum string

const (
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "default"
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "private"
)

type ManagedZoneForwardingConfigNameServerTarget struct {
	ForwardingPath *ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum `json:"forwardingPath,omitempty"`
	Ipv4Address    *string                                                        `json:"ipv4Address,omitempty"`
	Kind           *string                                                        `json:"kind,omitempty"`
}
