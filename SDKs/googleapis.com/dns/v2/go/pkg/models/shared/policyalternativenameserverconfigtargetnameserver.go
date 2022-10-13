package shared

type PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum string

const (
	PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "DEFAULT"
	PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "PRIVATE"
)

type PolicyAlternativeNameServerConfigTargetNameServer struct {
	ForwardingPath *PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum `json:"forwardingPath"`
	Ipv4Address    *string                                                              `json:"ipv4Address"`
	Kind           *string                                                              `json:"kind"`
}
