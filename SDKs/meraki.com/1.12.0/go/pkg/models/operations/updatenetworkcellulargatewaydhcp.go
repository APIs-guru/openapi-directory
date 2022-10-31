package operations



type UpdateNetworkCellularGatewayDhcpPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkCellularGatewayDhcpRequestBody struct {
    DhcpLeaseTime *string `json:"dhcpLeaseTime,omitempty"`
    DNSCustomNameservers []string `json:"dnsCustomNameservers,omitempty"`
    DNSNameservers *string `json:"dnsNameservers,omitempty"`
    
}

type UpdateNetworkCellularGatewayDhcpRequest struct {
    PathParams UpdateNetworkCellularGatewayDhcpPathParams 
    Request *UpdateNetworkCellularGatewayDhcpRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkCellularGatewayDhcpResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkCellularGatewayDhcp200ApplicationJSONObject map[string]interface{} 
    
}

