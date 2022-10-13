package operations

type GetNetworkWirelessClientConnectionStatsPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessClientConnectionStatsBandEnum string

const (
	GetNetworkWirelessClientConnectionStatsBandEnumTwo4 GetNetworkWirelessClientConnectionStatsBandEnum = "2.4"
	GetNetworkWirelessClientConnectionStatsBandEnumFive GetNetworkWirelessClientConnectionStatsBandEnum = "5"
)

type GetNetworkWirelessClientConnectionStatsQueryParams struct {
	ApTag    *string                                          `queryParam:"style=form,explode=true,name=apTag"`
	Band     *GetNetworkWirelessClientConnectionStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
	Ssid     *int64                                           `queryParam:"style=form,explode=true,name=ssid"`
	T0       *string                                          `queryParam:"style=form,explode=true,name=t0"`
	T1       *string                                          `queryParam:"style=form,explode=true,name=t1"`
	Timespan *float32                                         `queryParam:"style=form,explode=true,name=timespan"`
	Vlan     *int64                                           `queryParam:"style=form,explode=true,name=vlan"`
}

type GetNetworkWirelessClientConnectionStatsRequest struct {
	PathParams  GetNetworkWirelessClientConnectionStatsPathParams
	QueryParams GetNetworkWirelessClientConnectionStatsQueryParams
}

type GetNetworkWirelessClientConnectionStatsResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	GetNetworkWirelessClientConnectionStats200ApplicationJSONObject map[string]interface{}
}
