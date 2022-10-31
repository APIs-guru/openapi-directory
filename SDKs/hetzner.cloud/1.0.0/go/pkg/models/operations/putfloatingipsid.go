package operations



type PutFloatingIpsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutFloatingIpsIDUpdateFloatingIPRequest struct {
    Description *string `json:"description,omitempty"`
    Labels map[string]interface{} `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PutFloatingIpsIDRequest struct {
    PathParams PutFloatingIpsIDPathParams 
    Request *PutFloatingIpsIDUpdateFloatingIPRequest `request:"mediaType=application/json"`
    
}

type PutFloatingIpsID200ApplicationJSONFloatingIPDNSPtr struct {
    DNSPtr string `json:"dns_ptr"`
    IP string `json:"ip"`
    
}

type PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation struct {
    City string `json:"city"`
    Country string `json:"country"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    Latitude float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Name string `json:"name"`
    NetworkZone string `json:"network_zone"`
    
}

type PutFloatingIpsID200ApplicationJSONFloatingIPProtection struct {
    Delete bool `json:"delete"`
    
}


type PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum string

const (
    PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnumIpv4 PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = "ipv4"
PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnumIpv6 PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = "ipv6"
)


type PutFloatingIpsID200ApplicationJSONFloatingIP struct {
    Blocked bool `json:"blocked"`
    Created string `json:"created"`
    Description string `json:"description"`
    DNSPtr []PutFloatingIpsID200ApplicationJSONFloatingIPDNSPtr `json:"dns_ptr"`
    HomeLocation PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation `json:"home_location"`
    ID int64 `json:"id"`
    IP string `json:"ip"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    Protection PutFloatingIpsID200ApplicationJSONFloatingIPProtection `json:"protection"`
    Server int64 `json:"server"`
    Type PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum `json:"type"`
    
}

type PutFloatingIpsID200ApplicationJSON struct {
    FloatingIP PutFloatingIpsID200ApplicationJSONFloatingIP `json:"floating_ip"`
    
}

type PutFloatingIpsIDResponse struct {
    ContentType string 
    PutFloatingIpsID200ApplicationJSONObject *PutFloatingIpsID200ApplicationJSON 
    StatusCode int64 
    
}

