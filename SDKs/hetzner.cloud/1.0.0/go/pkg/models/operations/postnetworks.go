package operations



type PostNetworksCreateNetworkRequestLabels struct {
    Labelkey *string `json:"labelkey,omitempty"`
    
}

type PostNetworksCreateNetworkRequestRoutes struct {
    Destination string `json:"destination"`
    Gateway string `json:"gateway"`
    
}


type PostNetworksCreateNetworkRequestSubnetsTypeEnum string

const (
    PostNetworksCreateNetworkRequestSubnetsTypeEnumCloud PostNetworksCreateNetworkRequestSubnetsTypeEnum = "cloud"
PostNetworksCreateNetworkRequestSubnetsTypeEnumServer PostNetworksCreateNetworkRequestSubnetsTypeEnum = "server"
PostNetworksCreateNetworkRequestSubnetsTypeEnumVswitch PostNetworksCreateNetworkRequestSubnetsTypeEnum = "vswitch"
)


type PostNetworksCreateNetworkRequestSubnets struct {
    IPRange *string `json:"ip_range,omitempty"`
    NetworkZone string `json:"network_zone"`
    Type PostNetworksCreateNetworkRequestSubnetsTypeEnum `json:"type"`
    
}

type PostNetworksCreateNetworkRequest struct {
    IPRange string `json:"ip_range"`
    Labels *PostNetworksCreateNetworkRequestLabels `json:"labels,omitempty"`
    Name string `json:"name"`
    Routes []PostNetworksCreateNetworkRequestRoutes `json:"routes,omitempty"`
    Subnets []PostNetworksCreateNetworkRequestSubnets `json:"subnets,omitempty"`
    
}

type PostNetworksRequest struct {
    Request *PostNetworksCreateNetworkRequest `request:"mediaType=application/json"`
    
}

type PostNetworks201ApplicationJSONNetworkProtection struct {
    Delete bool `json:"delete"`
    
}

type PostNetworks201ApplicationJSONNetworkRoutes struct {
    Destination string `json:"destination"`
    Gateway string `json:"gateway"`
    
}


type PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum string

const (
    PostNetworks201ApplicationJSONNetworkSubnetsTypeEnumCloud PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = "cloud"
PostNetworks201ApplicationJSONNetworkSubnetsTypeEnumServer PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = "server"
PostNetworks201ApplicationJSONNetworkSubnetsTypeEnumVswitch PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = "vswitch"
)


type PostNetworks201ApplicationJSONNetworkSubnets struct {
    Gateway string `json:"gateway"`
    IPRange *string `json:"ip_range,omitempty"`
    NetworkZone string `json:"network_zone"`
    Type PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum `json:"type"`
    
}

type PostNetworks201ApplicationJSONNetwork struct {
    Created string `json:"created"`
    ID int64 `json:"id"`
    IPRange string `json:"ip_range"`
    Labels map[string]interface{} `json:"labels"`
    LoadBalancers []int64 `json:"load_balancers,omitempty"`
    Name string `json:"name"`
    Protection PostNetworks201ApplicationJSONNetworkProtection `json:"protection"`
    Routes []PostNetworks201ApplicationJSONNetworkRoutes `json:"routes"`
    Servers []int64 `json:"servers"`
    Subnets []PostNetworks201ApplicationJSONNetworkSubnets `json:"subnets"`
    
}

type PostNetworks201ApplicationJSON struct {
    Network *PostNetworks201ApplicationJSONNetwork `json:"network,omitempty"`
    
}

type PostNetworksResponse struct {
    ContentType string 
    PostNetworks201ApplicationJSONObject *PostNetworks201ApplicationJSON 
    StatusCode int64 
    
}

