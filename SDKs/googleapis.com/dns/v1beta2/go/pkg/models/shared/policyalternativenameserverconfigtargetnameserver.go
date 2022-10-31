package shared




type PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum string

const (
    PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "default"
PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum = "private"
)


type PolicyAlternativeNameServerConfigTargetNameServer struct {
    ForwardingPath *PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum `json:"forwardingPath,omitempty"`
    Ipv4Address *string `json:"ipv4Address,omitempty"`
    Ipv6Address *string `json:"ipv6Address,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

