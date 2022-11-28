package operations

type PutFirewallsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutFirewallsIDUpdateFirewallRequest struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

type PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum string

const (
	PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnumServer PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)

type PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources struct {
	Server *PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer   `json:"server,omitempty"`
	Type   *PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum `json:"type,omitempty"`
}

type PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type PutFirewallsIDFirewallResponseFirewallAppliedToServer struct {
	ID int64 `json:"id"`
}

type PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum string

const (
	PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnumServer        PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = "server"
	PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnumLabelSelector PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = "label_selector"
)

type PutFirewallsIDFirewallResponseFirewallAppliedTo struct {
	AppliedToResources []PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources `json:"applied_to_resources,omitempty"`
	LabelSelector      *PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector       `json:"label_selector,omitempty"`
	Server             *PutFirewallsIDFirewallResponseFirewallAppliedToServer              `json:"server,omitempty"`
	Type               PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum             `json:"type"`
}

type PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum string

const (
	PutFirewallsIDFirewallResponseFirewallRuleDirectionEnumIn  PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum = "in"
	PutFirewallsIDFirewallResponseFirewallRuleDirectionEnumOut PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum = "out"
)

type PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum string

const (
	PutFirewallsIDFirewallResponseFirewallRuleProtocolEnumTCP  PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "tcp"
	PutFirewallsIDFirewallResponseFirewallRuleProtocolEnumUDP  PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "udp"
	PutFirewallsIDFirewallResponseFirewallRuleProtocolEnumIcmp PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "icmp"
	PutFirewallsIDFirewallResponseFirewallRuleProtocolEnumEsp  PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "esp"
	PutFirewallsIDFirewallResponseFirewallRuleProtocolEnumGre  PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "gre"
)

type PutFirewallsIDFirewallResponseFirewallRule struct {
	Description    *string                                                 `json:"description,omitempty"`
	DestinationIps []string                                                `json:"destination_ips,omitempty"`
	Direction      PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum `json:"direction"`
	Port           *string                                                 `json:"port,omitempty"`
	Protocol       PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                `json:"source_ips,omitempty"`
}

type PutFirewallsIDFirewallResponseFirewall struct {
	AppliedTo []PutFirewallsIDFirewallResponseFirewallAppliedTo `json:"applied_to"`
	Created   string                                            `json:"created"`
	ID        int64                                             `json:"id"`
	Labels    map[string]string                                 `json:"labels,omitempty"`
	Name      string                                            `json:"name"`
	Rules     []PutFirewallsIDFirewallResponseFirewallRule      `json:"rules"`
}

type PutFirewallsIDFirewallResponse struct {
	Firewall PutFirewallsIDFirewallResponseFirewall `json:"firewall"`
}

type PutFirewallsIDRequest struct {
	PathParams PutFirewallsIDPathParams
	Request    *PutFirewallsIDUpdateFirewallRequest `request:"mediaType=application/json"`
}

type PutFirewallsIDResponse struct {
	ContentType      string
	FirewallResponse *PutFirewallsIDFirewallResponse
	StatusCode       int64
}
