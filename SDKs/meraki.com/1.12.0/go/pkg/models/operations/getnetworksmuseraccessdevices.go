package operations



type GetNetworkSmUserAccessDevicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmUserAccessDevicesQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetNetworkSmUserAccessDevicesRequest struct {
    PathParams GetNetworkSmUserAccessDevicesPathParams 
    QueryParams GetNetworkSmUserAccessDevicesQueryParams 
    
}

type GetNetworkSmUserAccessDevicesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetNetworkSmUserAccessDevices200ApplicationJSONObject map[string]interface{} 
    
}

