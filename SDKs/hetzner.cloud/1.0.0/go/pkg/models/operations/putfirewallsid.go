package operations

type PutFirewallsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutFirewallsIDRequestBodyUpdateFirewallRequest struct {
	Labels map[string]interface{} `json:"labels"`
	Name   *string                `json:"name"`
}

type PutFirewallsIDRequest struct {
	PathParams PutFirewallsIDPathParams
	Request    *PutFirewallsIDRequestBodyUpdateFirewallRequest `request:"mediaType=application/json"`
}

type PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum string

const (
	PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnumServer PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)

type PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources struct {
	Server *PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer   `json:"server"`
	Type   *PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum `json:"type"`
}

type PutFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type PutFirewallsID200ApplicationJSONFirewallAppliedToServer struct {
	ID int64 `json:"id"`
}

type PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum string

const (
	PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnumServer        PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum = "server"
	PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnumLabelSelector PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum = "label_selector"
)

type PutFirewallsID200ApplicationJSONFirewallAppliedTo struct {
	AppliedToResources []PutFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources `json:"applied_to_resources"`
	LabelSelector      *PutFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector       `json:"label_selector"`
	Server             *PutFirewallsID200ApplicationJSONFirewallAppliedToServer              `json:"server"`
	Type               PutFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum             `json:"type"`
}

type PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnum string

const (
	PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnumIn  PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnum = "in"
	PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnumOut PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnum = "out"
)

type PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum string

const (
	PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnumTCP  PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "tcp"
	PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnumUDP  PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "udp"
	PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnumIcmp PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "icmp"
	PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnumEsp  PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "esp"
	PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnumGre  PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "gre"
)

type PutFirewallsID200ApplicationJSONFirewallRulesRule struct {
	Description    *string                                                    `json:"description"`
	DestinationIps []string                                                   `json:"destination_ips"`
	Direction      PutFirewallsID200ApplicationJSONFirewallRulesDirectionEnum `json:"direction"`
	Port           *string                                                    `json:"port"`
	Protocol       PutFirewallsID200ApplicationJSONFirewallRulesProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                   `json:"source_ips"`
}

type PutFirewallsID200ApplicationJSONFirewallFirewall struct {
	AppliedTo []PutFirewallsID200ApplicationJSONFirewallAppliedTo `json:"applied_to"`
	Created   string                                              `json:"created"`
	ID        int64                                               `json:"id"`
	Labels    map[string]string                                   `json:"labels"`
	Name      string                                              `json:"name"`
	Rules     []PutFirewallsID200ApplicationJSONFirewallRulesRule `json:"rules"`
}

type PutFirewallsID200ApplicationJSONFirewallResponse struct {
	Firewall PutFirewallsID200ApplicationJSONFirewallFirewall `json:"firewall"`
}

type PutFirewallsIDResponse struct {
	ContentType      string
	FirewallResponse *PutFirewallsID200ApplicationJSONFirewallResponse
	StatusCode       int64
}
