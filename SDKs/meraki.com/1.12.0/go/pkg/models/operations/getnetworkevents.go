package operations



type GetNetworkEventsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkEventsProductTypeEnum string

const (
    GetNetworkEventsProductTypeEnumWireless GetNetworkEventsProductTypeEnum = "wireless"
GetNetworkEventsProductTypeEnumAppliance GetNetworkEventsProductTypeEnum = "appliance"
GetNetworkEventsProductTypeEnumSwitch GetNetworkEventsProductTypeEnum = "switch"
GetNetworkEventsProductTypeEnumSystemsManager GetNetworkEventsProductTypeEnum = "systemsManager"
GetNetworkEventsProductTypeEnumCamera GetNetworkEventsProductTypeEnum = "camera"
GetNetworkEventsProductTypeEnumCellularGateway GetNetworkEventsProductTypeEnum = "cellularGateway"
)


type GetNetworkEventsQueryParams struct {
    ClientIP *string `queryParam:"style=form,explode=true,name=clientIp"`
    ClientMac *string `queryParam:"style=form,explode=true,name=clientMac"`
    ClientName *string `queryParam:"style=form,explode=true,name=clientName"`
    DeviceMac *string `queryParam:"style=form,explode=true,name=deviceMac"`
    DeviceName *string `queryParam:"style=form,explode=true,name=deviceName"`
    DeviceSerial *string `queryParam:"style=form,explode=true,name=deviceSerial"`
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    ExcludedEventTypes []string `queryParam:"style=form,explode=false,name=excludedEventTypes"`
    IncludedEventTypes []string `queryParam:"style=form,explode=false,name=includedEventTypes"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    ProductType *GetNetworkEventsProductTypeEnum `queryParam:"style=form,explode=true,name=productType"`
    SmDeviceMac *string `queryParam:"style=form,explode=true,name=smDeviceMac"`
    SmDeviceName *string `queryParam:"style=form,explode=true,name=smDeviceName"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetNetworkEventsRequest struct {
    PathParams GetNetworkEventsPathParams 
    QueryParams GetNetworkEventsQueryParams 
    
}

type GetNetworkEventsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetNetworkEvents200ApplicationJSONObject map[string]interface{} 
    
}

