package operations

type GetNetworkWirelessLatencyHistoryPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessLatencyHistoryAccessCategoryEnum string

const (
	GetNetworkWirelessLatencyHistoryAccessCategoryEnumBackgroundTraffic GetNetworkWirelessLatencyHistoryAccessCategoryEnum = "backgroundTraffic"
	GetNetworkWirelessLatencyHistoryAccessCategoryEnumBestEffortTraffic GetNetworkWirelessLatencyHistoryAccessCategoryEnum = "bestEffortTraffic"
	GetNetworkWirelessLatencyHistoryAccessCategoryEnumVideoTraffic      GetNetworkWirelessLatencyHistoryAccessCategoryEnum = "videoTraffic"
	GetNetworkWirelessLatencyHistoryAccessCategoryEnumVoiceTraffic      GetNetworkWirelessLatencyHistoryAccessCategoryEnum = "voiceTraffic"
)

type GetNetworkWirelessLatencyHistoryBandEnum string

const (
	GetNetworkWirelessLatencyHistoryBandEnumTwo4 GetNetworkWirelessLatencyHistoryBandEnum = "2.4"
	GetNetworkWirelessLatencyHistoryBandEnumFive GetNetworkWirelessLatencyHistoryBandEnum = "5"
)

type GetNetworkWirelessLatencyHistoryQueryParams struct {
	AccessCategory *GetNetworkWirelessLatencyHistoryAccessCategoryEnum `queryParam:"style=form,explode=true,name=accessCategory"`
	ApTag          *string                                             `queryParam:"style=form,explode=true,name=apTag"`
	AutoResolution *bool                                               `queryParam:"style=form,explode=true,name=autoResolution"`
	Band           *GetNetworkWirelessLatencyHistoryBandEnum           `queryParam:"style=form,explode=true,name=band"`
	ClientID       *string                                             `queryParam:"style=form,explode=true,name=clientId"`
	DeviceSerial   *string                                             `queryParam:"style=form,explode=true,name=deviceSerial"`
	Resolution     *int64                                              `queryParam:"style=form,explode=true,name=resolution"`
	Ssid           *int64                                              `queryParam:"style=form,explode=true,name=ssid"`
	T0             *string                                             `queryParam:"style=form,explode=true,name=t0"`
	T1             *string                                             `queryParam:"style=form,explode=true,name=t1"`
	Timespan       *float32                                            `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkWirelessLatencyHistoryRequest struct {
	PathParams  GetNetworkWirelessLatencyHistoryPathParams
	QueryParams GetNetworkWirelessLatencyHistoryQueryParams
}

type GetNetworkWirelessLatencyHistoryResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	GetNetworkWirelessLatencyHistory200ApplicationJSONObject map[string]interface{}
}
