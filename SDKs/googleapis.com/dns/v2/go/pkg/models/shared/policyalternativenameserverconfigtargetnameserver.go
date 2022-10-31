package shared

type PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum string

const (
	PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "DEFAULT"
	PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "PRIVATE"
)

type PolicyAlternativeNameServerConfigTargetNameServer struct {
	ForwardingPath *PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum `json:"forwardingPath,omitempty"`
	Ipv4Address    *string                                                              `json:"ipv4Address,omitempty"`
	Kind           *string                                                              `json:"kind,omitempty"`
}
