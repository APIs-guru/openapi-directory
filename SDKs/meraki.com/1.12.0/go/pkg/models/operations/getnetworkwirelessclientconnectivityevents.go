package operations



type GetNetworkWirelessClientConnectivityEventsPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessClientConnectivityEventsBandEnum string

const (
    GetNetworkWirelessClientConnectivityEventsBandEnumTwo4 GetNetworkWirelessClientConnectivityEventsBandEnum = "2.4"
GetNetworkWirelessClientConnectivityEventsBandEnumFive GetNetworkWirelessClientConnectivityEventsBandEnum = "5"
)



type GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum string

const (
    GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumGood GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = "good"
GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumInfo GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = "info"
GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumWarn GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = "warn"
GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumBad GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum = "bad"
)



type GetNetworkWirelessClientConnectivityEventsTypesEnum string

const (
    GetNetworkWirelessClientConnectivityEventsTypesEnumAssoc GetNetworkWirelessClientConnectivityEventsTypesEnum = "assoc"
GetNetworkWirelessClientConnectivityEventsTypesEnumDisassoc GetNetworkWirelessClientConnectivityEventsTypesEnum = "disassoc"
GetNetworkWirelessClientConnectivityEventsTypesEnumAuth GetNetworkWirelessClientConnectivityEventsTypesEnum = "auth"
GetNetworkWirelessClientConnectivityEventsTypesEnumDeauth GetNetworkWirelessClientConnectivityEventsTypesEnum = "deauth"
GetNetworkWirelessClientConnectivityEventsTypesEnumDNS GetNetworkWirelessClientConnectivityEventsTypesEnum = "dns"
GetNetworkWirelessClientConnectivityEventsTypesEnumDhcp GetNetworkWirelessClientConnectivityEventsTypesEnum = "dhcp"
GetNetworkWirelessClientConnectivityEventsTypesEnumRoam GetNetworkWirelessClientConnectivityEventsTypesEnum = "roam"
GetNetworkWirelessClientConnectivityEventsTypesEnumConnection GetNetworkWirelessClientConnectivityEventsTypesEnum = "connection"
GetNetworkWirelessClientConnectivityEventsTypesEnumSticky GetNetworkWirelessClientConnectivityEventsTypesEnum = "sticky"
)


type GetNetworkWirelessClientConnectivityEventsQueryParams struct {
    Band *GetNetworkWirelessClientConnectivityEventsBandEnum `queryParam:"style=form,explode=true,name=band"`
    DeviceSerial *string `queryParam:"style=form,explode=true,name=deviceSerial"`
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    IncludedSeverities []GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum `queryParam:"style=form,explode=false,name=includedSeverities"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    SsidNumber *int64 `queryParam:"style=form,explode=true,name=ssidNumber"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Types []GetNetworkWirelessClientConnectivityEventsTypesEnum `queryParam:"style=form,explode=false,name=types"`
    
}

type GetNetworkWirelessClientConnectivityEventsRequest struct {
    PathParams GetNetworkWirelessClientConnectivityEventsPathParams 
    QueryParams GetNetworkWirelessClientConnectivityEventsQueryParams 
    
}

type GetNetworkWirelessClientConnectivityEventsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetNetworkWirelessClientConnectivityEvents200ApplicationJSONObject map[string]interface{} 
    
}

