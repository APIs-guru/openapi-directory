package operations

type PostFirewallsIDActionsSetRulesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum string

const (
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnumIn  PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum = "in"
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnumOut PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum = "out"
)

type PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum string

const (
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnumTCP  PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = "tcp"
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnumUDP  PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = "udp"
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnumIcmp PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = "icmp"
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnumEsp  PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = "esp"
	PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnumGre  PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = "gre"
)

type PostFirewallsIDActionsSetRulesSetRulesRequestRule struct {
	Description    *string                                                        `json:"description,omitempty"`
	DestinationIps []string                                                       `json:"destination_ips,omitempty"`
	Direction      PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum `json:"direction"`
	Port           *string                                                        `json:"port,omitempty"`
	Protocol       PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                       `json:"source_ips,omitempty"`
}

type PostFirewallsIDActionsSetRulesSetRulesRequest struct {
	Rules []PostFirewallsIDActionsSetRulesSetRulesRequestRule `json:"rules"`
}

type PostFirewallsIDActionsSetRulesRequest struct {
	PathParams PostFirewallsIDActionsSetRulesPathParams
	Request    *PostFirewallsIDActionsSetRulesSetRulesRequest `request:"mediaType=application/json"`
}

type PostFirewallsIDActionsSetRulesActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsIDActionsSetRulesActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum string

const (
	PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnumSuccess PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum = "success"
	PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnumRunning PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum = "running"
	PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnumError   PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum = "error"
)

type PostFirewallsIDActionsSetRulesActionsResponseAction struct {
	Command   string                                                         `json:"command"`
	Error     PostFirewallsIDActionsSetRulesActionsResponseActionError       `json:"error"`
	Finished  string                                                         `json:"finished"`
	ID        int64                                                          `json:"id"`
	Progress  float64                                                        `json:"progress"`
	Resources []PostFirewallsIDActionsSetRulesActionsResponseActionResources `json:"resources"`
	Started   string                                                         `json:"started"`
	Status    PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum  `json:"status"`
}

type PostFirewallsIDActionsSetRulesActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type PostFirewallsIDActionsSetRulesActionsResponseMeta struct {
	Pagination PostFirewallsIDActionsSetRulesActionsResponseMetaPagination `json:"pagination"`
}

type PostFirewallsIDActionsSetRulesActionsResponse struct {
	Actions []PostFirewallsIDActionsSetRulesActionsResponseAction `json:"actions"`
	Meta    *PostFirewallsIDActionsSetRulesActionsResponseMeta    `json:"meta,omitempty"`
}

type PostFirewallsIDActionsSetRulesResponse struct {
	ActionsResponse *PostFirewallsIDActionsSetRulesActionsResponse
	ContentType     string
	StatusCode      int64
}
