package operations

type GetNetworkWirelessConnectionStatsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessConnectionStatsBandEnum string

const (
	GetNetworkWirelessConnectionStatsBandEnumTwo4 GetNetworkWirelessConnectionStatsBandEnum = "2.4"
	GetNetworkWirelessConnectionStatsBandEnumFive GetNetworkWirelessConnectionStatsBandEnum = "5"
)

type GetNetworkWirelessConnectionStatsQueryParams struct {
	ApTag    *string                                    `queryParam:"style=form,explode=true,name=apTag"`
	Band     *GetNetworkWirelessConnectionStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
	Ssid     *int64                                     `queryParam:"style=form,explode=true,name=ssid"`
	T0       *string                                    `queryParam:"style=form,explode=true,name=t0"`
	T1       *string                                    `queryParam:"style=form,explode=true,name=t1"`
	Timespan *float32                                   `queryParam:"style=form,explode=true,name=timespan"`
	Vlan     *int64                                     `queryParam:"style=form,explode=true,name=vlan"`
}

type GetNetworkWirelessConnectionStatsRequest struct {
	PathParams  GetNetworkWirelessConnectionStatsPathParams
	QueryParams GetNetworkWirelessConnectionStatsQueryParams
}

type GetNetworkWirelessConnectionStatsResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetNetworkWirelessConnectionStats200ApplicationJSONObject map[string]interface{}
}
