package operations



type GetFirewallsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFirewallsIDRequest struct {
    PathParams GetFirewallsIDPathParams 
    
}

type GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer struct {
    ID int64 `json:"id"`
    
}


type GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum string

const (
    GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnumServer GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)


type GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources struct {
    Server *GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer `json:"server,omitempty"`
    Type *GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum `json:"type,omitempty"`
    
}

type GetFirewallsIDFirewallResponseFirewallAppliedToLabelSelector struct {
    Selector string `json:"selector"`
    
}

type GetFirewallsIDFirewallResponseFirewallAppliedToServer struct {
    ID int64 `json:"id"`
    
}


type GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum string

const (
    GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnumServer GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = "server"
GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnumLabelSelector GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = "label_selector"
)


type GetFirewallsIDFirewallResponseFirewallAppliedTo struct {
    AppliedToResources []GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources `json:"applied_to_resources,omitempty"`
    LabelSelector *GetFirewallsIDFirewallResponseFirewallAppliedToLabelSelector `json:"label_selector,omitempty"`
    Server *GetFirewallsIDFirewallResponseFirewallAppliedToServer `json:"server,omitempty"`
    Type GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum `json:"type"`
    
}


type GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum string

const (
    GetFirewallsIDFirewallResponseFirewallRuleDirectionEnumIn GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum = "in"
GetFirewallsIDFirewallResponseFirewallRuleDirectionEnumOut GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum = "out"
)



type GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum string

const (
    GetFirewallsIDFirewallResponseFirewallRuleProtocolEnumTCP GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "tcp"
GetFirewallsIDFirewallResponseFirewallRuleProtocolEnumUDP GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "udp"
GetFirewallsIDFirewallResponseFirewallRuleProtocolEnumIcmp GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "icmp"
GetFirewallsIDFirewallResponseFirewallRuleProtocolEnumEsp GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "esp"
GetFirewallsIDFirewallResponseFirewallRuleProtocolEnumGre GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = "gre"
)


type GetFirewallsIDFirewallResponseFirewallRule struct {
    Description *string `json:"description,omitempty"`
    DestinationIps []string `json:"destination_ips,omitempty"`
    Direction GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum `json:"direction"`
    Port *string `json:"port,omitempty"`
    Protocol GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum `json:"protocol"`
    SourceIps []string `json:"source_ips,omitempty"`
    
}

type GetFirewallsIDFirewallResponseFirewall struct {
    AppliedTo []GetFirewallsIDFirewallResponseFirewallAppliedTo `json:"applied_to"`
    Created string `json:"created"`
    ID int64 `json:"id"`
    Labels map[string]string `json:"labels,omitempty"`
    Name string `json:"name"`
    Rules []GetFirewallsIDFirewallResponseFirewallRule `json:"rules"`
    
}

type GetFirewallsIDFirewallResponse struct {
    Firewall GetFirewallsIDFirewallResponseFirewall `json:"firewall"`
    
}

type GetFirewallsIDResponse struct {
    ContentType string 
    FirewallResponse *GetFirewallsIDFirewallResponse 
    StatusCode int64 
    
}

