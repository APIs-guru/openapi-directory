package operations



type GetNetworkPiiSmOwnersForKeyPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkPiiSmOwnersForKeyQueryParams struct {
    BluetoothMac *string `queryParam:"style=form,explode=true,name=bluetoothMac"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Imei *string `queryParam:"style=form,explode=true,name=imei"`
    Mac *string `queryParam:"style=form,explode=true,name=mac"`
    Serial *string `queryParam:"style=form,explode=true,name=serial"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetNetworkPiiSmOwnersForKeyRequest struct {
    PathParams GetNetworkPiiSmOwnersForKeyPathParams 
    QueryParams GetNetworkPiiSmOwnersForKeyQueryParams 
    
}

type GetNetworkPiiSmOwnersForKeyResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkPiiSmOwnersForKey200ApplicationJSONObject map[string]interface{} 
    
}

