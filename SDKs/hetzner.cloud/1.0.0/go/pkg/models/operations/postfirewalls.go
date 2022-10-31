package operations

type PostFirewallsCreateFirewallRequestApplyToLabelSelector struct {
	Selector string `json:"selector"`
}

type PostFirewallsCreateFirewallRequestApplyToServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsCreateFirewallRequestApplyToTypeEnum string

const (
	PostFirewallsCreateFirewallRequestApplyToTypeEnumServer        PostFirewallsCreateFirewallRequestApplyToTypeEnum = "server"
	PostFirewallsCreateFirewallRequestApplyToTypeEnumLabelSelector PostFirewallsCreateFirewallRequestApplyToTypeEnum = "label_selector"
)

type PostFirewallsCreateFirewallRequestApplyTo struct {
	LabelSelector *PostFirewallsCreateFirewallRequestApplyToLabelSelector `json:"label_selector,omitempty"`
	Server        *PostFirewallsCreateFirewallRequestApplyToServer        `json:"server,omitempty"`
	Type          PostFirewallsCreateFirewallRequestApplyToTypeEnum       `json:"type"`
}

type PostFirewallsCreateFirewallRequestRuleDirectionEnum string

const (
	PostFirewallsCreateFirewallRequestRuleDirectionEnumIn  PostFirewallsCreateFirewallRequestRuleDirectionEnum = "in"
	PostFirewallsCreateFirewallRequestRuleDirectionEnumOut PostFirewallsCreateFirewallRequestRuleDirectionEnum = "out"
)

type PostFirewallsCreateFirewallRequestRuleProtocolEnum string

const (
	PostFirewallsCreateFirewallRequestRuleProtocolEnumTCP  PostFirewallsCreateFirewallRequestRuleProtocolEnum = "tcp"
	PostFirewallsCreateFirewallRequestRuleProtocolEnumUDP  PostFirewallsCreateFirewallRequestRuleProtocolEnum = "udp"
	PostFirewallsCreateFirewallRequestRuleProtocolEnumIcmp PostFirewallsCreateFirewallRequestRuleProtocolEnum = "icmp"
	PostFirewallsCreateFirewallRequestRuleProtocolEnumEsp  PostFirewallsCreateFirewallRequestRuleProtocolEnum = "esp"
	PostFirewallsCreateFirewallRequestRuleProtocolEnumGre  PostFirewallsCreateFirewallRequestRuleProtocolEnum = "gre"
)

type PostFirewallsCreateFirewallRequestRule struct {
	Description    *string                                             `json:"description,omitempty"`
	DestinationIps []string                                            `json:"destination_ips,omitempty"`
	Direction      PostFirewallsCreateFirewallRequestRuleDirectionEnum `json:"direction"`
	Port           *string                                             `json:"port,omitempty"`
	Protocol       PostFirewallsCreateFirewallRequestRuleProtocolEnum  `json:"protocol"`
	SourceIps      []string                                            `json:"source_ips,omitempty"`
}

type PostFirewallsCreateFirewallRequest struct {
	ApplyTo []PostFirewallsCreateFirewallRequestApplyTo `json:"apply_to,omitempty"`
	Labels  map[string]interface{}                      `json:"labels,omitempty"`
	Name    string                                      `json:"name"`
	Rules   []PostFirewallsCreateFirewallRequestRule    `json:"rules,omitempty"`
}

type PostFirewallsRequest struct {
	Request *PostFirewallsCreateFirewallRequest `request:"mediaType=application/json"`
}

type PostFirewallsCreateFirewallResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsCreateFirewallResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsCreateFirewallResponseActionStatusEnum string

const (
	PostFirewallsCreateFirewallResponseActionStatusEnumSuccess PostFirewallsCreateFirewallResponseActionStatusEnum = "success"
	PostFirewallsCreateFirewallResponseActionStatusEnumRunning PostFirewallsCreateFirewallResponseActionStatusEnum = "running"
	PostFirewallsCreateFirewallResponseActionStatusEnumError   PostFirewallsCreateFirewallResponseActionStatusEnum = "error"
)

type PostFirewallsCreateFirewallResponseAction struct {
	Command   string                                               `json:"command"`
	Error     PostFirewallsCreateFirewallResponseActionError       `json:"error"`
	Finished  string                                               `json:"finished"`
	ID        int64                                                `json:"id"`
	Progress  float64                                              `json:"progress"`
	Resources []PostFirewallsCreateFirewallResponseActionResources `json:"resources"`
	Started   string                                               `json:"started"`
	Status    PostFirewallsCreateFirewallResponseActionStatusEnum  `json:"status"`
}

type PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum string

const (
	PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnumServer PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)

type PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources struct {
	Server *PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer   `json:"server,omitempty"`
	Type   *PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum `json:"type,omitempty"`
}

type PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type PostFirewallsCreateFirewallResponseFirewallAppliedToServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum string

const (
	PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnumServer        PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum = "server"
	PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnumLabelSelector PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum = "label_selector"
)

type PostFirewallsCreateFirewallResponseFirewallAppliedTo struct {
	AppliedToResources []PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources `json:"applied_to_resources,omitempty"`
	LabelSelector      *PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector       `json:"label_selector,omitempty"`
	Server             *PostFirewallsCreateFirewallResponseFirewallAppliedToServer              `json:"server,omitempty"`
	Type               PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum             `json:"type"`
}

type PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum string

const (
	PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnumIn  PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum = "in"
	PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnumOut PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum = "out"
)

type PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum string

const (
	PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnumTCP  PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = "tcp"
	PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnumUDP  PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = "udp"
	PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnumIcmp PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = "icmp"
	PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnumEsp  PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = "esp"
	PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnumGre  PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = "gre"
)

type PostFirewallsCreateFirewallResponseFirewallRule struct {
	Description    *string                                                      `json:"description,omitempty"`
	DestinationIps []string                                                     `json:"destination_ips,omitempty"`
	Direction      PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum `json:"direction"`
	Port           *string                                                      `json:"port,omitempty"`
	Protocol       PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                     `json:"source_ips,omitempty"`
}

type PostFirewallsCreateFirewallResponseFirewall struct {
	AppliedTo []PostFirewallsCreateFirewallResponseFirewallAppliedTo `json:"applied_to"`
	Created   string                                                 `json:"created"`
	ID        int64                                                  `json:"id"`
	Labels    map[string]string                                      `json:"labels,omitempty"`
	Name      string                                                 `json:"name"`
	Rules     []PostFirewallsCreateFirewallResponseFirewallRule      `json:"rules"`
}

type PostFirewallsCreateFirewallResponse struct {
	Actions  []PostFirewallsCreateFirewallResponseAction  `json:"actions,omitempty"`
	Firewall *PostFirewallsCreateFirewallResponseFirewall `json:"firewall,omitempty"`
}

type PostFirewallsResponse struct {
	ContentType            string
	CreateFirewallResponse *PostFirewallsCreateFirewallResponse
	StatusCode             int64
}
