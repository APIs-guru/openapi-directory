package operations

type GetNetworksIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// GetNetworksID200ApplicationJSONNetworkProtection
// Protection configuration for the Network
type GetNetworksID200ApplicationJSONNetworkProtection struct {
	Delete bool `json:"delete"`
}

type GetNetworksID200ApplicationJSONNetworkRoutes struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

type GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum string

const (
	GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnumCloud   GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = "cloud"
	GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnumServer  GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = "server"
	GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnumVswitch GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = "vswitch"
)

type GetNetworksID200ApplicationJSONNetworkSubnets struct {
	Gateway     string                                                `json:"gateway"`
	IPRange     *string                                               `json:"ip_range,omitempty"`
	NetworkZone string                                                `json:"network_zone"`
	Type        GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum `json:"type"`
}

type GetNetworksID200ApplicationJSONNetwork struct {
	Created       string                                           `json:"created"`
	ID            int64                                            `json:"id"`
	IPRange       string                                           `json:"ip_range"`
	Labels        map[string]interface{}                           `json:"labels"`
	LoadBalancers []int64                                          `json:"load_balancers,omitempty"`
	Name          string                                           `json:"name"`
	Protection    GetNetworksID200ApplicationJSONNetworkProtection `json:"protection"`
	Routes        []GetNetworksID200ApplicationJSONNetworkRoutes   `json:"routes"`
	Servers       []int64                                          `json:"servers"`
	Subnets       []GetNetworksID200ApplicationJSONNetworkSubnets  `json:"subnets"`
}

type GetNetworksID200ApplicationJSON struct {
	Network *GetNetworksID200ApplicationJSONNetwork `json:"network,omitempty"`
}

type GetNetworksIDRequest struct {
	PathParams GetNetworksIDPathParams
}

type GetNetworksIDResponse struct {
	ContentType                           string
	GetNetworksID200ApplicationJSONObject *GetNetworksID200ApplicationJSON
	StatusCode                            int64
}
