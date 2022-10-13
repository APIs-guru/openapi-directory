package shared

type ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum string

const (
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "default"
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "private"
)

type ManagedZoneForwardingConfigNameServerTarget struct {
	ForwardingPath *ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum `json:"forwardingPath"`
	Ipv4Address    *string                                                        `json:"ipv4Address"`
	Ipv6Address    *string                                                        `json:"ipv6Address"`
	Kind           *string                                                        `json:"kind"`
}
