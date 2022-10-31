package operations

type GetNetworkWirelessFailedConnectionsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessFailedConnectionsBandEnum string

const (
	GetNetworkWirelessFailedConnectionsBandEnumTwo4 GetNetworkWirelessFailedConnectionsBandEnum = "2.4"
	GetNetworkWirelessFailedConnectionsBandEnumFive GetNetworkWirelessFailedConnectionsBandEnum = "5"
)

type GetNetworkWirelessFailedConnectionsQueryParams struct {
	ApTag    *string                                      `queryParam:"style=form,explode=true,name=apTag"`
	Band     *GetNetworkWirelessFailedConnectionsBandEnum `queryParam:"style=form,explode=true,name=band"`
	ClientID *string                                      `queryParam:"style=form,explode=true,name=clientId"`
	Serial   *string                                      `queryParam:"style=form,explode=true,name=serial"`
	Ssid     *int64                                       `queryParam:"style=form,explode=true,name=ssid"`
	T0       *string                                      `queryParam:"style=form,explode=true,name=t0"`
	T1       *string                                      `queryParam:"style=form,explode=true,name=t1"`
	Timespan *float32                                     `queryParam:"style=form,explode=true,name=timespan"`
	Vlan     *int64                                       `queryParam:"style=form,explode=true,name=vlan"`
}

type GetNetworkWirelessFailedConnectionsRequest struct {
	PathParams  GetNetworkWirelessFailedConnectionsPathParams
	QueryParams GetNetworkWirelessFailedConnectionsQueryParams
}

type GetNetworkWirelessFailedConnectionsResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetNetworkWirelessFailedConnections200ApplicationJSONObject map[string]interface{}
}
