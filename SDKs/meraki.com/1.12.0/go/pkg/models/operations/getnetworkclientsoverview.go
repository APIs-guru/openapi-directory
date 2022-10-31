package operations



type GetNetworkClientsOverviewPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkClientsOverviewQueryParams struct {
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkClientsOverviewRequest struct {
    PathParams GetNetworkClientsOverviewPathParams 
    QueryParams GetNetworkClientsOverviewQueryParams 
    
}

type GetNetworkClientsOverviewResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkClientsOverview200ApplicationJSONObject map[string]interface{} 
    
}

