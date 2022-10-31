package operations



type GetNetworkClientsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkClientsRecentDeviceConnectionsEnum string

const (
    GetNetworkClientsRecentDeviceConnectionsEnumWired GetNetworkClientsRecentDeviceConnectionsEnum = "Wired"
GetNetworkClientsRecentDeviceConnectionsEnumWireless GetNetworkClientsRecentDeviceConnectionsEnum = "Wireless"
)



type GetNetworkClientsStatusesEnum string

const (
    GetNetworkClientsStatusesEnumOnline GetNetworkClientsStatusesEnum = "Online"
GetNetworkClientsStatusesEnumOffline GetNetworkClientsStatusesEnum = "Offline"
)


type GetNetworkClientsQueryParams struct {
    Description *string `queryParam:"style=form,explode=true,name=description"`
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    IP *string `queryParam:"style=form,explode=true,name=ip"`
    Ip6 *string `queryParam:"style=form,explode=true,name=ip6"`
    Ip6Local *string `queryParam:"style=form,explode=true,name=ip6Local"`
    Mac *string `queryParam:"style=form,explode=true,name=mac"`
    Os *string `queryParam:"style=form,explode=true,name=os"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    RecentDeviceConnections []GetNetworkClientsRecentDeviceConnectionsEnum `queryParam:"style=form,explode=false,name=recentDeviceConnections"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    Statuses []GetNetworkClientsStatusesEnum `queryParam:"style=form,explode=false,name=statuses"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkClientsRequest struct {
    PathParams GetNetworkClientsPathParams 
    QueryParams GetNetworkClientsQueryParams 
    
}

type GetNetworkClientsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetNetworkClients200ApplicationJSONObject map[string]interface{} 
    
}

