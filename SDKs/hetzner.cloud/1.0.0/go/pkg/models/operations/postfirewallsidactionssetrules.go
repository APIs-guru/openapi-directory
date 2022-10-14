package operations

type PostFirewallsIDActionsSetRulesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnum string

const (
	PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnumIn  PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnum = "in"
	PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnumOut PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnum = "out"
)

type PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum string

const (
	PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnumTCP  PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum = "tcp"
	PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnumUDP  PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum = "udp"
	PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnumIcmp PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum = "icmp"
	PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnumEsp  PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum = "esp"
	PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnumGre  PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum = "gre"
)

type PostFirewallsIDActionsSetRulesRequestBodyRulesRule struct {
	Description    *string                                                     `json:"description,omitempty"`
	DestinationIps []string                                                    `json:"destination_ips,omitempty"`
	Direction      PostFirewallsIDActionsSetRulesRequestBodyRulesDirectionEnum `json:"direction"`
	Port           *string                                                     `json:"port,omitempty"`
	Protocol       PostFirewallsIDActionsSetRulesRequestBodyRulesProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                    `json:"source_ips,omitempty"`
}

type PostFirewallsIDActionsSetRulesRequestBodySetRulesRequest struct {
	Rules []PostFirewallsIDActionsSetRulesRequestBodyRulesRule `json:"rules"`
}

type PostFirewallsIDActionsSetRulesRequest struct {
	PathParams PostFirewallsIDActionsSetRulesPathParams
	Request    *PostFirewallsIDActionsSetRulesRequestBodySetRulesRequest `request:"mediaType=application/json"`
}

type PostFirewallsIDActionsSetRules201ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsIDActionsSetRules201ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum string

const (
	PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnumSuccess PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum = "success"
	PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnumRunning PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum = "running"
	PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnumError   PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum = "error"
)

type PostFirewallsIDActionsSetRules201ApplicationJSONActionsAction struct {
	Command   string                                                             `json:"command"`
	Error     PostFirewallsIDActionsSetRules201ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                             `json:"finished"`
	ID        int64                                                              `json:"id"`
	Progress  float64                                                            `json:"progress"`
	Resources []PostFirewallsIDActionsSetRules201ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                             `json:"started"`
	Status    PostFirewallsIDActionsSetRules201ApplicationJSONActionsStatusEnum  `json:"status"`
}

type PostFirewallsIDActionsSetRules201ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type PostFirewallsIDActionsSetRules201ApplicationJSONMeta struct {
	Pagination PostFirewallsIDActionsSetRules201ApplicationJSONMetaPagination `json:"pagination"`
}

type PostFirewallsIDActionsSetRules201ApplicationJSONActionsResponse struct {
	Actions []PostFirewallsIDActionsSetRules201ApplicationJSONActionsAction `json:"actions"`
	Meta    *PostFirewallsIDActionsSetRules201ApplicationJSONMeta           `json:"meta,omitempty"`
}

type PostFirewallsIDActionsSetRulesResponse struct {
	ActionsResponse *PostFirewallsIDActionsSetRules201ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
