package operations

type GetNetworkWirelessLatencyStatsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessLatencyStatsBandEnum string

const (
	GetNetworkWirelessLatencyStatsBandEnumTwo4 GetNetworkWirelessLatencyStatsBandEnum = "2.4"
	GetNetworkWirelessLatencyStatsBandEnumFive GetNetworkWirelessLatencyStatsBandEnum = "5"
)

type GetNetworkWirelessLatencyStatsQueryParams struct {
	ApTag    *string                                 `queryParam:"style=form,explode=true,name=apTag"`
	Band     *GetNetworkWirelessLatencyStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
	Fields   *string                                 `queryParam:"style=form,explode=true,name=fields"`
	Ssid     *int64                                  `queryParam:"style=form,explode=true,name=ssid"`
	T0       *string                                 `queryParam:"style=form,explode=true,name=t0"`
	T1       *string                                 `queryParam:"style=form,explode=true,name=t1"`
	Timespan *float32                                `queryParam:"style=form,explode=true,name=timespan"`
	Vlan     *int64                                  `queryParam:"style=form,explode=true,name=vlan"`
}

type GetNetworkWirelessLatencyStatsRequest struct {
	PathParams  GetNetworkWirelessLatencyStatsPathParams
	QueryParams GetNetworkWirelessLatencyStatsQueryParams
}

type GetNetworkWirelessLatencyStatsResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetNetworkWirelessLatencyStats200ApplicationJSONObject map[string]interface{}
}
