package operations



type GetNetworkFirmwareUpgradesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkFirmwareUpgradesRequest struct {
    PathParams GetNetworkFirmwareUpgradesPathParams 
    
}

type GetNetworkFirmwareUpgradesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkFirmwareUpgrades200ApplicationJSONObject map[string]interface{} 
    
}

