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

type GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesServer struct {
	ID int64 `json:"id"`
}

type GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesTypeEnum string

const (
	GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesTypeEnumServer GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesTypeEnum = "server"
)

type GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResources struct {
	Server *GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesServer   `json:"server"`
	Type   *GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesTypeEnum `json:"type"`
}

type GetFirewalls200ApplicationJSONFirewallsAppliedToLabelSelector struct {
	Selector string `json:"selector"`
}

type GetFirewalls200ApplicationJSONFirewallsAppliedToServer struct {
	ID int64 `json:"id"`
}

type GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnum string

const (
	GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnumServer        GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnum = "server"
	GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnumLabelSelector GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnum = "label_selector"
)

type GetFirewalls200ApplicationJSONFirewallsAppliedTo struct {
	AppliedToResources []GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResources `json:"applied_to_resources"`
	LabelSelector      *GetFirewalls200ApplicationJSONFirewallsAppliedToLabelSelector       `json:"label_selector"`
	Server             *GetFirewalls200ApplicationJSONFirewallsAppliedToServer              `json:"server"`
	Type               GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnum             `json:"type"`
}

type GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnum string

const (
	GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnumIn  GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnum = "in"
	GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnumOut GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnum = "out"
)

type GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum string

const (
	GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnumTCP  GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum = "tcp"
	GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnumUDP  GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum = "udp"
	GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnumIcmp GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum = "icmp"
	GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnumEsp  GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum = "esp"
	GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnumGre  GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum = "gre"
)

type GetFirewalls200ApplicationJSONFirewallsRulesRule struct {
	Description    *string                                                   `json:"description"`
	DestinationIps []string                                                  `json:"destination_ips"`
	Direction      GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnum `json:"direction"`
	Port           *string                                                   `json:"port"`
	Protocol       GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum  `json:"protocol"`
	SourceIps      []string                                                  `json:"source_ips"`
}

type GetFirewalls200ApplicationJSONFirewallsFirewall struct {
	AppliedTo []GetFirewalls200ApplicationJSONFirewallsAppliedTo `json:"applied_to"`
	Created   string                                             `json:"created"`
	ID        int64                                              `json:"id"`
	Labels    map[string]string                                  `json:"labels"`
	Name      string                                             `json:"name"`
	Rules     []GetFirewalls200ApplicationJSONFirewallsRulesRule `json:"rules"`
}

type GetFirewalls200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetFirewalls200ApplicationJSONMeta struct {
	Pagination GetFirewalls200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetFirewalls200ApplicationJSONFirewallsResponse struct {
	Firewalls []GetFirewalls200ApplicationJSONFirewallsFirewall `json:"firewalls"`
	Meta      *GetFirewalls200ApplicationJSONMeta               `json:"meta"`
}

type GetFirewallsResponse struct {
	ContentType       string
	FirewallsResponse *GetFirewalls200ApplicationJSONFirewallsResponse
	StatusCode        int64
}
