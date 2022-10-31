package operations

type GetNetworkWirelessClientLatencyStatsPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessClientLatencyStatsBandEnum string

const (
	GetNetworkWirelessClientLatencyStatsBandEnumTwo4 GetNetworkWirelessClientLatencyStatsBandEnum = "2.4"
	GetNetworkWirelessClientLatencyStatsBandEnumFive GetNetworkWirelessClientLatencyStatsBandEnum = "5"
)

type GetNetworkWirelessClientLatencyStatsQueryParams struct {
	ApTag    *string                                       `queryParam:"style=form,explode=true,name=apTag"`
	Band     *GetNetworkWirelessClientLatencyStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
	Fields   *string                                       `queryParam:"style=form,explode=true,name=fields"`
	Ssid     *int64                                        `queryParam:"style=form,explode=true,name=ssid"`
	T0       *string                                       `queryParam:"style=form,explode=true,name=t0"`
	T1       *string                                       `queryParam:"style=form,explode=true,name=t1"`
	Timespan *float32                                      `queryParam:"style=form,explode=true,name=timespan"`
	Vlan     *int64                                        `queryParam:"style=form,explode=true,name=vlan"`
}

type GetNetworkWirelessClientLatencyStatsRequest struct {
	PathParams  GetNetworkWirelessClientLatencyStatsPathParams
	QueryParams GetNetworkWirelessClientLatencyStatsQueryParams
}

type GetNetworkWirelessClientLatencyStatsResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetNetworkWirelessClientLatencyStats200ApplicationJSONObject map[string]interface{}
}
