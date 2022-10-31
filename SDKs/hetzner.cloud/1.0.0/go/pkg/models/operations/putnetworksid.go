package operations



type PutNetworksIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutNetworksIDUpdateNetworkRequestLabels struct {
    Labelkey *string `json:"labelkey,omitempty"`
    
}

type PutNetworksIDUpdateNetworkRequest struct {
    Labels *PutNetworksIDUpdateNetworkRequestLabels `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PutNetworksIDRequest struct {
    PathParams PutNetworksIDPathParams 
    Request *PutNetworksIDUpdateNetworkRequest `request:"mediaType=application/json"`
    
}

type PutNetworksID200ApplicationJSONNetworkProtection struct {
    Delete bool `json:"delete"`
    
}

type PutNetworksID200ApplicationJSONNetworkRoutes struct {
    Destination string `json:"destination"`
    Gateway string `json:"gateway"`
    
}


type PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum string

const (
    PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnumCloud PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = "cloud"
PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnumServer PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = "server"
PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnumVswitch PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = "vswitch"
)


type PutNetworksID200ApplicationJSONNetworkSubnets struct {
    Gateway string `json:"gateway"`
    IPRange *string `json:"ip_range,omitempty"`
    NetworkZone string `json:"network_zone"`
    Type PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum `json:"type"`
    
}

type PutNetworksID200ApplicationJSONNetwork struct {
    Created string `json:"created"`
    ID int64 `json:"id"`
    IPRange string `json:"ip_range"`
    Labels map[string]interface{} `json:"labels"`
    LoadBalancers []int64 `json:"load_balancers,omitempty"`
    Name string `json:"name"`
    Protection PutNetworksID200ApplicationJSONNetworkProtection `json:"protection"`
    Routes []PutNetworksID200ApplicationJSONNetworkRoutes `json:"routes"`
    Servers []int64 `json:"servers"`
    Subnets []PutNetworksID200ApplicationJSONNetworkSubnets `json:"subnets"`
    
}

type PutNetworksID200ApplicationJSON struct {
    Network *PutNetworksID200ApplicationJSONNetwork `json:"network,omitempty"`
    
}

type PutNetworksIDResponse struct {
    ContentType string 
    PutNetworksID200ApplicationJSONObject *PutNetworksID200ApplicationJSON 
    StatusCode int64 
    
}

