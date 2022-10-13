package shared

type PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum string

const (
	PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "default"
	PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "private"
)

type PolicyAlternativeNameServerConfigTargetNameServer struct {
	ForwardingPath *PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum `json:"forwardingPath"`
	Ipv4Address    *string                                                              `json:"ipv4Address"`
	Ipv6Address    *string                                                              `json:"ipv6Address"`
	Kind           *string                                                              `json:"kind"`
}
