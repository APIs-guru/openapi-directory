package operations

type PostFirewallsRequestBodyApplyToLabelSelector struct {
	Selector string `json:"selector"`
}

type PostFirewallsRequestBodyApplyToServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsRequestBodyApplyToTypeEnum string

const (
	PostFirewallsRequestBodyApplyToTypeEnumServer        PostFirewallsRequestBodyApplyToTypeEnum = "server"
	PostFirewallsRequestBodyApplyToTypeEnumLabelSelector PostFirewallsRequestBodyApplyToTypeEnum = "label_selector"
)

type PostFirewallsRequestBodyApplyTo struct {
	LabelSelector *PostFirewallsRequestBodyApplyToLabelSelector `json:"label_selector,omitempty"`
	Server        *PostFirewallsRequestBodyApplyToServer        `json:"server,omitempty"`
	Type          PostFirewallsRequestBodyApplyToTypeEnum       `json:"type"`
}

type PostFirewallsRequestBodyRulesDirectionEnum string

const (
	PostFirewallsRequestBodyRulesDirectionEnumIn  PostFirewallsRequestBodyRulesDirectionEnum = "in"
	PostFirewallsRequestBodyRulesDirectionEnumOut PostFirewallsRequestBodyRulesDirectionEnum = "out"
)

type PostFirewallsRequestBodyRulesProtocolEnum string

const (
	PostFirewallsRequestBodyRulesProtocolEnumTCP  PostFirewallsRequestBodyRulesProtocolEnum = "tcp"
	PostFirewallsRequestBodyRulesProtocolEnumUDP  PostFirewallsRequestBodyRulesProtocolEnum = "udp"
	PostFirewallsRequestBodyRulesProtocolEnumIcmp PostFirewallsRequestBodyRulesProtocolEnum = "icmp"
	PostFirewallsRequestBodyRulesProtocolEnumEsp  PostFirewallsRequestBodyRulesProtocolEnum = "esp"
	PostFirewallsRequestBodyRulesProtocolEnumGre  PostFirewallsRequestBodyRulesProtocolEnum = "gre"
)

type PostFirewallsRequestBodyRulesRule struct {
	Description    *string                                    `json:"description,omitempty"`
	DestinationIps []string                                   `json:"destination_ips,omitempty"`
	Direction      PostFirewallsRequestBodyRulesDirectionEnum `json:"direction"`
	Port           *string                                    `json:"port,omitempty"`
	Protocol       PostFirewallsRequestBodyRulesProtocolEnum  `json:"protocol"`
	SourceIps      []string                                   `json:"source_ips,omitempty"`
}

type PostFirewallsRequestBodyCreateFirewallRequest struct {
	ApplyTo []PostFirewallsRequestBodyApplyTo   `json:"apply_to,omitempty"`
	Labels  map[string]interface{}              `json:"labels,omitempty"`
	Name    string                              `json:"name"`
	Rules   []PostFirewallsRequestBodyRulesRule `json:"rules,omitempty"`
}

type PostFirewallsRequest struct {
	Request *PostFirewallsRequestBodyCreateFirewallRequest `request:"mediaType=application/json"`
}

type PostFirewalls201ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewalls201ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewalls201ApplicationJSONActionsStatusEnum string

const (
	PostFirewalls201ApplicationJSONActionsStatusEnumSuccess PostFirewalls201ApplicationJSONActionsStatusEnum = "success"
	PostFirewalls201ApplicationJSONActionsStatusEnumRunning PostFirewalls201ApplicationJSONActionsStatusEnum = "running"
	PostFirewalls201ApplicationJSONActionsStatusEnumError   PostFirewalls201ApplicationJSONActionsStatusEnum = "error"
)

type PostFirewalls201ApplicationJSONActionsAction struct {
	Command   string                                            `json:"command"`
	Error     PostFirewalls201ApplicationJSONActionsError       `json:"error"`
	Finished  string                                            `json:"finished"`
	ID        int64                                             `json:"id"`
	Progress  float64                                           `json:"progress"`
	Resources []PostFirewalls201ApplicationJSONActionsResources `json:"resources"`
	Started   string                                            `json:"started"`
	Status    PostFirewalls201ApplicationJSONActionsStatusEnum  `json:"status"`
}

type PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum string

const (
	PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnumServer PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)

type PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResources struct {
	Server *PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesServer   `json:"server,omitempty"`
	Type   *PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResourcesTypeEnum `json:"type,omitempty"`
}

type PostFirewalls201ApplicationJSONFirewallAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type PostFirewalls201ApplicationJSONFirewallAppliedToServer struct {
	ID int64 `json:"id"`
}

type PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnum string

const (
	PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnumServer        PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnum = "server"
	PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnumLabelSelector PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnum = "label_selector"
)

type PostFirewalls201ApplicationJSONFirewallAppliedTo struct {
	AppliedToResources []PostFirewalls201ApplicationJSONFirewallAppliedToAppliedToResources `json:"applied_to_resources,omitempty"`
	LabelSelector      *PostFirewalls201ApplicationJSONFirewallAppliedToLabelSelector       `json:"label_selector,omitempty"`
	Server             *PostFirewalls201ApplicationJSONFirewallAppliedToServer              `json:"server,omitempty"`
	Type               PostFirewalls201ApplicationJSONFirewallAppliedToTypeEnum             `json:"type"`
}

type PostFirewalls201ApplicationJSONFirewallRulesDirectionEnum string

const (
	PostFirewalls201ApplicationJSONFirewallRulesDirectionEnumIn  PostFirewalls201ApplicationJSONFirewallRulesDirectionEnum = "in"
	PostFirewalls201ApplicationJSONFirewallRulesDirectionEnumOut PostFirewalls201ApplicationJSONFirewallRulesDirectionEnum = "out"
)

type PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum string

const (
	PostFirewalls201ApplicationJSONFirewallRulesProtocolEnumTCP  PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum = "tcp"
	PostFirewalls201ApplicationJSONFirewallRulesProtocolEnumUDP  PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum = "udp"
	PostFirewalls201ApplicationJSONFirewallRulesProtocolEnumIcmp PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum = "icmp"
	PostFirewalls201ApplicationJSONFirewallRulesProtocolEnumEsp  PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum = "esp"
	PostFirewalls201ApplicationJSONFirewallRulesProtocolEnumGre  PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum = "gre"
)

type PostFirewalls201ApplicationJSONFirewallRulesRule struct {
	Description    *string                                                   `json:"description,omitempty"`
	DestinationIps []string                                                  `json:"destination_ips,omitempty"`
	Direction      PostFirewalls201ApplicationJSONFirewallRulesDirectionEnum `json:"direction"`
	Port           *string                                                   `json:"port,omitempty"`
	Protocol       PostFirewalls201ApplicationJSONFirewallRulesProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                  `json:"source_ips,omitempty"`
}

type PostFirewalls201ApplicationJSONFirewallFirewall struct {
	AppliedTo []PostFirewalls201ApplicationJSONFirewallAppliedTo `json:"applied_to"`
	Created   string                                             `json:"created"`
	ID        int64                                              `json:"id"`
	Labels    map[string]string                                  `json:"labels,omitempty"`
	Name      string                                             `json:"name"`
	Rules     []PostFirewalls201ApplicationJSONFirewallRulesRule `json:"rules"`
}

type PostFirewalls201ApplicationJSONCreateFirewallResponse struct {
	Actions  []PostFirewalls201ApplicationJSONActionsAction   `json:"actions,omitempty"`
	Firewall *PostFirewalls201ApplicationJSONFirewallFirewall `json:"firewall,omitempty"`
}

type PostFirewallsResponse struct {
	ContentType            string
	CreateFirewallResponse *PostFirewalls201ApplicationJSONCreateFirewallResponse
	StatusCode             int64
}
