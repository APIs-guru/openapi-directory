package operations

type GetNetworksQueryParams struct {
	LabelSelector *string `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string `queryParam:"style=form,explode=true,name=name"`
}

type GetNetworksRequest struct {
	QueryParams GetNetworksQueryParams
}

type GetNetworks200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetNetworks200ApplicationJSONMeta struct {
	Pagination GetNetworks200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetNetworks200ApplicationJSONNetworksProtection struct {
	Delete bool `json:"delete"`
}

type GetNetworks200ApplicationJSONNetworksRoutes struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

type GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum string

const (
	GetNetworks200ApplicationJSONNetworksSubnetsTypeEnumCloud   GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum = "cloud"
	GetNetworks200ApplicationJSONNetworksSubnetsTypeEnumServer  GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum = "server"
	GetNetworks200ApplicationJSONNetworksSubnetsTypeEnumVswitch GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum = "vswitch"
)

type GetNetworks200ApplicationJSONNetworksSubnets struct {
	Gateway     string                                               `json:"gateway"`
	IPRange     *string                                              `json:"ip_range"`
	NetworkZone string                                               `json:"network_zone"`
	Type        GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum `json:"type"`
}

type GetNetworks200ApplicationJSONNetworks struct {
	Created       string                                          `json:"created"`
	ID            int64                                           `json:"id"`
	IPRange       string                                          `json:"ip_range"`
	Labels        map[string]interface{}                          `json:"labels"`
	LoadBalancers []int64                                         `json:"load_balancers"`
	Name          string                                          `json:"name"`
	Protection    GetNetworks200ApplicationJSONNetworksProtection `json:"protection"`
	Routes        []GetNetworks200ApplicationJSONNetworksRoutes   `json:"routes"`
	Servers       []int64                                         `json:"servers"`
	Subnets       []GetNetworks200ApplicationJSONNetworksSubnets  `json:"subnets"`
}

type GetNetworks200ApplicationJSON struct {
	Meta     *GetNetworks200ApplicationJSONMeta      `json:"meta"`
	Networks []GetNetworks200ApplicationJSONNetworks `json:"networks"`
}

type GetNetworksResponse struct {
	ContentType                         string
	GetNetworks200ApplicationJSONObject *GetNetworks200ApplicationJSON
	StatusCode                          int64
}
