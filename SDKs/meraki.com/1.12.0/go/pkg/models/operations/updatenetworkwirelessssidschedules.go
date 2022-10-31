package operations



type UpdateNetworkWirelessSsidSchedulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type UpdateNetworkWirelessSsidSchedulesRequestBodyRanges struct {
    EndDay string `json:"endDay"`
    EndTime string `json:"endTime"`
    StartDay string `json:"startDay"`
    StartTime string `json:"startTime"`
    
}

type UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds struct {
    End int64 `json:"end"`
    Start int64 `json:"start"`
    
}

type UpdateNetworkWirelessSsidSchedulesRequestBody struct {
    Enabled *bool `json:"enabled,omitempty"`
    Ranges []UpdateNetworkWirelessSsidSchedulesRequestBodyRanges `json:"ranges,omitempty"`
    RangesInSeconds []UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds `json:"rangesInSeconds,omitempty"`
    
}

type UpdateNetworkWirelessSsidSchedulesRequest struct {
    PathParams UpdateNetworkWirelessSsidSchedulesPathParams 
    Request *UpdateNetworkWirelessSsidSchedulesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessSsidSchedulesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessSsidSchedules200ApplicationJSONObject map[string]interface{} 
    
}

