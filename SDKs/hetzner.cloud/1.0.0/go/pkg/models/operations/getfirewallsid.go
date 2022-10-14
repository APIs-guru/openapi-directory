package operations

type GetFirewallsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFirewallsIDRequest struct {
	PathParams GetFirewallsIDPathParams
}

type GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum string

const (
	GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnumServer GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)

type GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources struct {
	Server *GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesServer   `json:"server,omitempty"`
	Type   *GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum `json:"type,omitempty"`
}

type GetFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type GetFirewallsID200ApplicationJSONFirewallAppliedToServer struct {
	ID int64 `json:"id"`
}

type GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum string

const (
	GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnumServer        GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum = "server"
	GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnumLabelSelector GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum = "label_selector"
)

type GetFirewallsID200ApplicationJSONFirewallAppliedTo struct {
	AppliedToResources []GetFirewallsID200ApplicationJSONFirewallAppliedToAppliedToResources `json:"applied_to_resources,omitempty"`
	LabelSelector      *GetFirewallsID200ApplicationJSONFirewallAppliedToLabelSelector       `json:"label_selector,omitempty"`
	Server             *GetFirewallsID200ApplicationJSONFirewallAppliedToServer              `json:"server,omitempty"`
	Type               GetFirewallsID200ApplicationJSONFirewallAppliedToTypeEnum             `json:"type"`
}

type GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnum string

const (
	GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnumIn  GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnum = "in"
	GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnumOut GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnum = "out"
)

type GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum string

const (
	GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnumTCP  GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "tcp"
	GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnumUDP  GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "udp"
	GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnumIcmp GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "icmp"
	GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnumEsp  GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "esp"
	GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnumGre  GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum = "gre"
)

type GetFirewallsID200ApplicationJSONFirewallRulesRule struct {
	Description    *string                                                    `json:"description,omitempty"`
	DestinationIps []string                                                   `json:"destination_ips,omitempty"`
	Direction      GetFirewallsID200ApplicationJSONFirewallRulesDirectionEnum `json:"direction"`
	Port           *string                                                    `json:"port,omitempty"`
	Protocol       GetFirewallsID200ApplicationJSONFirewallRulesProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                   `json:"source_ips,omitempty"`
}

type GetFirewallsID200ApplicationJSONFirewallFirewall struct {
	AppliedTo []GetFirewallsID200ApplicationJSONFirewallAppliedTo `json:"applied_to"`
	Created   string                                              `json:"created"`
	ID        int64                                               `json:"id"`
	Labels    map[string]string                                   `json:"labels,omitempty"`
	Name      string                                              `json:"name"`
	Rules     []GetFirewallsID200ApplicationJSONFirewallRulesRule `json:"rules"`
}

type GetFirewallsID200ApplicationJSONFirewallResponse struct {
	Firewall GetFirewallsID200ApplicationJSONFirewallFirewall `json:"firewall"`
}

type GetFirewallsIDResponse struct {
	ContentType      string
	FirewallResponse *GetFirewallsID200ApplicationJSONFirewallResponse
	StatusCode       int64
}
