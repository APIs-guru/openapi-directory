package shared

type ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum string

const (
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "DEFAULT"
	ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum = "PRIVATE"
)

type ManagedZoneForwardingConfigNameServerTarget struct {
	ForwardingPath *ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum `json:"forwardingPath"`
	Ipv4Address    *string                                                        `json:"ipv4Address"`
	Kind           *string                                                        `json:"kind"`
}
