package operations



type GetNetworkPiiPiiKeysPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkPiiPiiKeysQueryParams struct {
    BluetoothMac *string `queryParam:"style=form,explode=true,name=bluetoothMac"`
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Imei *string `queryParam:"style=form,explode=true,name=imei"`
    Mac *string `queryParam:"style=form,explode=true,name=mac"`
    Serial *string `queryParam:"style=form,explode=true,name=serial"`
    Username *string `queryParam:"style=form,explode=true,name=username"`
    
}

type GetNetworkPiiPiiKeysRequest struct {
    PathParams GetNetworkPiiPiiKeysPathParams 
    QueryParams GetNetworkPiiPiiKeysQueryParams 
    
}

type GetNetworkPiiPiiKeysResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkPiiPiiKeys200ApplicationJSONObject map[string]interface{} 
    
}

