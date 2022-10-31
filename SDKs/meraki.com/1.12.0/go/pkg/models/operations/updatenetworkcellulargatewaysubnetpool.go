package operations



type UpdateNetworkCellularGatewaySubnetPoolPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkCellularGatewaySubnetPoolRequestBody struct {
    Cidr *string `json:"cidr,omitempty"`
    Mask *int64 `json:"mask,omitempty"`
    
}

type UpdateNetworkCellularGatewaySubnetPoolRequest struct {
    PathParams UpdateNetworkCellularGatewaySubnetPoolPathParams 
    Request *UpdateNetworkCellularGatewaySubnetPoolRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkCellularGatewaySubnetPoolResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkCellularGatewaySubnetPool200ApplicationJSONObject map[string]interface{} 
    
}

