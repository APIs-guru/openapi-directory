package operations

type GetNetworkWirelessSignalQualityHistoryPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessSignalQualityHistoryBandEnum string

const (
	GetNetworkWirelessSignalQualityHistoryBandEnumTwo4 GetNetworkWirelessSignalQualityHistoryBandEnum = "2.4"
	GetNetworkWirelessSignalQualityHistoryBandEnumFive GetNetworkWirelessSignalQualityHistoryBandEnum = "5"
)

type GetNetworkWirelessSignalQualityHistoryQueryParams struct {
	ApTag          *string                                         `queryParam:"style=form,explode=true,name=apTag"`
	AutoResolution *bool                                           `queryParam:"style=form,explode=true,name=autoResolution"`
	Band           *GetNetworkWirelessSignalQualityHistoryBandEnum `queryParam:"style=form,explode=true,name=band"`
	ClientID       *string                                         `queryParam:"style=form,explode=true,name=clientId"`
	DeviceSerial   *string                                         `queryParam:"style=form,explode=true,name=deviceSerial"`
	Resolution     *int64                                          `queryParam:"style=form,explode=true,name=resolution"`
	Ssid           *int64                                          `queryParam:"style=form,explode=true,name=ssid"`
	T0             *string                                         `queryParam:"style=form,explode=true,name=t0"`
	T1             *string                                         `queryParam:"style=form,explode=true,name=t1"`
	Timespan       *float32                                        `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkWirelessSignalQualityHistoryRequest struct {
	PathParams  GetNetworkWirelessSignalQualityHistoryPathParams
	QueryParams GetNetworkWirelessSignalQualityHistoryQueryParams
}

type GetNetworkWirelessSignalQualityHistoryResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	GetNetworkWirelessSignalQualityHistory200ApplicationJSONObject map[string]interface{}
}
