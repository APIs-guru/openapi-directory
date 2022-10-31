package operations



type GetOrganizationDevicesUplinksLossAndLatencyPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}


type GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum string

const (
    GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumWan1 GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum = "wan1"
GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumWan2 GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum = "wan2"
GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumCellular GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum = "cellular"
)


type GetOrganizationDevicesUplinksLossAndLatencyQueryParams struct {
    IP *string `queryParam:"style=form,explode=true,name=ip"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Uplink *GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum `queryParam:"style=form,explode=true,name=uplink"`
    
}

type GetOrganizationDevicesUplinksLossAndLatencyRequest struct {
    PathParams GetOrganizationDevicesUplinksLossAndLatencyPathParams 
    QueryParams GetOrganizationDevicesUplinksLossAndLatencyQueryParams 
    
}

type GetOrganizationDevicesUplinksLossAndLatencyResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObject map[string]interface{} 
    
}

