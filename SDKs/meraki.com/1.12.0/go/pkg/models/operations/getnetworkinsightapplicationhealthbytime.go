package operations



type GetNetworkInsightApplicationHealthByTimePathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkInsightApplicationHealthByTimeQueryParams struct {
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkInsightApplicationHealthByTimeRequest struct {
    PathParams GetNetworkInsightApplicationHealthByTimePathParams 
    QueryParams GetNetworkInsightApplicationHealthByTimeQueryParams 
    
}

type GetNetworkInsightApplicationHealthByTimeResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkInsightApplicationHealthByTime200ApplicationJSONObject map[string]interface{} 
    
}

