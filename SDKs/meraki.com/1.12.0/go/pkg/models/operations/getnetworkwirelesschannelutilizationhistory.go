package operations

type GetNetworkWirelessChannelUtilizationHistoryPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessChannelUtilizationHistoryBandEnum string

const (
	GetNetworkWirelessChannelUtilizationHistoryBandEnumTwo4 GetNetworkWirelessChannelUtilizationHistoryBandEnum = "2.4"
	GetNetworkWirelessChannelUtilizationHistoryBandEnumFive GetNetworkWirelessChannelUtilizationHistoryBandEnum = "5"
)

type GetNetworkWirelessChannelUtilizationHistoryQueryParams struct {
	ApTag          *string                                              `queryParam:"style=form,explode=true,name=apTag"`
	AutoResolution *bool                                                `queryParam:"style=form,explode=true,name=autoResolution"`
	Band           *GetNetworkWirelessChannelUtilizationHistoryBandEnum `queryParam:"style=form,explode=true,name=band"`
	ClientID       *string                                              `queryParam:"style=form,explode=true,name=clientId"`
	DeviceSerial   *string                                              `queryParam:"style=form,explode=true,name=deviceSerial"`
	Resolution     *int64                                               `queryParam:"style=form,explode=true,name=resolution"`
	T0             *string                                              `queryParam:"style=form,explode=true,name=t0"`
	T1             *string                                              `queryParam:"style=form,explode=true,name=t1"`
	Timespan       *float32                                             `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkWirelessChannelUtilizationHistoryRequest struct {
	PathParams  GetNetworkWirelessChannelUtilizationHistoryPathParams
	QueryParams GetNetworkWirelessChannelUtilizationHistoryQueryParams
}

type GetNetworkWirelessChannelUtilizationHistoryResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	GetNetworkWirelessChannelUtilizationHistory200ApplicationJSONObject map[string]interface{}
}
