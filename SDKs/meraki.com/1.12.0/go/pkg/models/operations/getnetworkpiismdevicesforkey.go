package operations



type GetNetworkPiiSmDevicesForKeyPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkPiiSmDevicesForKeyQueryParams struct {
    BluetoothMac *string `queryParam:"style=form,explode=true,name=bluetoothMac"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Imei *string `queryParam:"style=form,explode=true,name=imei"`
    Mac *string `queryParam:"style=form,explode=true,name=mac"`
    Serial *string `queryParam:"style=form,explode=true,name=serial"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetNetworkPiiSmDevicesForKeyRequest struct {
    PathParams GetNetworkPiiSmDevicesForKeyPathParams 
    QueryParams GetNetworkPiiSmDevicesForKeyQueryParams 
    
}

type GetNetworkPiiSmDevicesForKeyResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkPiiSmDevicesForKey200ApplicationJSONObject map[string]interface{} 
    
}

