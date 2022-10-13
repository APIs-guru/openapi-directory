package operations

type PostNetworksRequestBodyLabels struct {
	Labelkey *string `json:"labelkey"`
}

type PostNetworksRequestBodyRoutes struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

type PostNetworksRequestBodySubnetsTypeEnum string

const (
	PostNetworksRequestBodySubnetsTypeEnumCloud   PostNetworksRequestBodySubnetsTypeEnum = "cloud"
	PostNetworksRequestBodySubnetsTypeEnumServer  PostNetworksRequestBodySubnetsTypeEnum = "server"
	PostNetworksRequestBodySubnetsTypeEnumVswitch PostNetworksRequestBodySubnetsTypeEnum = "vswitch"
)

type PostNetworksRequestBodySubnets struct {
	IPRange     *string                                `json:"ip_range"`
	NetworkZone string                                 `json:"network_zone"`
	Type        PostNetworksRequestBodySubnetsTypeEnum `json:"type"`
}

type PostNetworksRequestBodyCreateNetworkRequest struct {
	IPRange string                           `json:"ip_range"`
	Labels  *PostNetworksRequestBodyLabels   `json:"labels"`
	Name    string                           `json:"name"`
	Routes  []PostNetworksRequestBodyRoutes  `json:"routes"`
	Subnets []PostNetworksRequestBodySubnets `json:"subnets"`
}

type PostNetworksRequest struct {
	Request *PostNetworksRequestBodyCreateNetworkRequest `request:"mediaType=application/json"`
}

type PostNetworks201ApplicationJSONNetworkProtection struct {
	Delete bool `json:"delete"`
}

type PostNetworks201ApplicationJSONNetworkRoutes struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

type PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum string

const (
	PostNetworks201ApplicationJSONNetworkSubnetsTypeEnumCloud   PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = "cloud"
	PostNetworks201ApplicationJSONNetworkSubnetsTypeEnumServer  PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = "server"
	PostNetworks201ApplicationJSONNetworkSubnetsTypeEnumVswitch PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = "vswitch"
)

type PostNetworks201ApplicationJSONNetworkSubnets struct {
	Gateway     string                                               `json:"gateway"`
	IPRange     *string                                              `json:"ip_range"`
	NetworkZone string                                               `json:"network_zone"`
	Type        PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum `json:"type"`
}

type PostNetworks201ApplicationJSONNetwork struct {
	Created       string                                          `json:"created"`
	ID            int64                                           `json:"id"`
	IPRange       string                                          `json:"ip_range"`
	Labels        map[string]interface{}                          `json:"labels"`
	LoadBalancers []int64                                         `json:"load_balancers"`
	Name          string                                          `json:"name"`
	Protection    PostNetworks201ApplicationJSONNetworkProtection `json:"protection"`
	Routes        []PostNetworks201ApplicationJSONNetworkRoutes   `json:"routes"`
	Servers       []int64                                         `json:"servers"`
	Subnets       []PostNetworks201ApplicationJSONNetworkSubnets  `json:"subnets"`
}

type PostNetworks201ApplicationJSON struct {
	Network *PostNetworks201ApplicationJSONNetwork `json:"network"`
}

type PostNetworksResponse struct {
	ContentType                          string
	PostNetworks201ApplicationJSONObject *PostNetworks201ApplicationJSON
	StatusCode                           int64
}
