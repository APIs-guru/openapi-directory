package operations

type GetFirewallsSortEnum string

const (
	GetFirewallsSortEnumID          GetFirewallsSortEnum = "id"
	GetFirewallsSortEnumIDAsc       GetFirewallsSortEnum = "id:asc"
	GetFirewallsSortEnumIDDesc      GetFirewallsSortEnum = "id:desc"
	GetFirewallsSortEnumName        GetFirewallsSortEnum = "name"
	GetFirewallsSortEnumNameAsc     GetFirewallsSortEnum = "name:asc"
	GetFirewallsSortEnumNameDesc    GetFirewallsSortEnum = "name:desc"
	GetFirewallsSortEnumCreated     GetFirewallsSortEnum = "created"
	GetFirewallsSortEnumCreatedAsc  GetFirewallsSortEnum = "created:asc"
	GetFirewallsSortEnumCreatedDesc GetFirewallsSortEnum = "created:desc"
)

type GetFirewallsQueryParams struct {
	LabelSelector *string               `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string               `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetFirewallsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetFirewallsRequest struct {
	QueryParams GetFirewallsQueryParams
}

type GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum string

const (
	GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnumServer GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum = "server"
)

type GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources struct {
	Server *GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer   `json:"server,omitempty"`
	Type   *GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum `json:"type,omitempty"`
}

type GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type GetFirewallsFirewallsResponseFirewallAppliedToServer struct {
	ID int64 `json:"id"`
}

type GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum string

const (
	GetFirewallsFirewallsResponseFirewallAppliedToTypeEnumServer        GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum = "server"
	GetFirewallsFirewallsResponseFirewallAppliedToTypeEnumLabelSelector GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum = "label_selector"
)

type GetFirewallsFirewallsResponseFirewallAppliedTo struct {
	AppliedToResources []GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources `json:"applied_to_resources,omitempty"`
	LabelSelector      *GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector       `json:"label_selector,omitempty"`
	Server             *GetFirewallsFirewallsResponseFirewallAppliedToServer              `json:"server,omitempty"`
	Type               GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum             `json:"type"`
}

type GetFirewallsFirewallsResponseFirewallRuleDirectionEnum string

const (
	GetFirewallsFirewallsResponseFirewallRuleDirectionEnumIn  GetFirewallsFirewallsResponseFirewallRuleDirectionEnum = "in"
	GetFirewallsFirewallsResponseFirewallRuleDirectionEnumOut GetFirewallsFirewallsResponseFirewallRuleDirectionEnum = "out"
)

type GetFirewallsFirewallsResponseFirewallRuleProtocolEnum string

const (
	GetFirewallsFirewallsResponseFirewallRuleProtocolEnumTCP  GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = "tcp"
	GetFirewallsFirewallsResponseFirewallRuleProtocolEnumUDP  GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = "udp"
	GetFirewallsFirewallsResponseFirewallRuleProtocolEnumIcmp GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = "icmp"
	GetFirewallsFirewallsResponseFirewallRuleProtocolEnumEsp  GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = "esp"
	GetFirewallsFirewallsResponseFirewallRuleProtocolEnumGre  GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = "gre"
)

type GetFirewallsFirewallsResponseFirewallRule struct {
	Description    *string                                                `json:"description,omitempty"`
	DestinationIps []string                                               `json:"destination_ips,omitempty"`
	Direction      GetFirewallsFirewallsResponseFirewallRuleDirectionEnum `json:"direction"`
	Port           *string                                                `json:"port,omitempty"`
	Protocol       GetFirewallsFirewallsResponseFirewallRuleProtocolEnum  `json:"protocol"`
	SourceIps      []string                                               `json:"source_ips,omitempty"`
}

type GetFirewallsFirewallsResponseFirewall struct {
	AppliedTo []GetFirewallsFirewallsResponseFirewallAppliedTo `json:"applied_to"`
	Created   string                                           `json:"created"`
	ID        int64                                            `json:"id"`
	Labels    map[string]string                                `json:"labels,omitempty"`
	Name      string                                           `json:"name"`
	Rules     []GetFirewallsFirewallsResponseFirewallRule      `json:"rules"`
}

type GetFirewallsFirewallsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetFirewallsFirewallsResponseMeta struct {
	Pagination GetFirewallsFirewallsResponseMetaPagination `json:"pagination"`
}

type GetFirewallsFirewallsResponse struct {
	Firewalls []GetFirewallsFirewallsResponseFirewall `json:"firewalls"`
	Meta      *GetFirewallsFirewallsResponseMeta      `json:"meta,omitempty"`
}

type GetFirewallsResponse struct {
	ContentType       string
	FirewallsResponse *GetFirewallsFirewallsResponse
	StatusCode        int64
}
