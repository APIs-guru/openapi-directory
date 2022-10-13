package operations

type GetNetworkTrafficPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkTrafficDeviceTypeEnum string

const (
	GetNetworkTrafficDeviceTypeEnumCombined  GetNetworkTrafficDeviceTypeEnum = "combined"
	GetNetworkTrafficDeviceTypeEnumWireless  GetNetworkTrafficDeviceTypeEnum = "wireless"
	GetNetworkTrafficDeviceTypeEnumSwitch    GetNetworkTrafficDeviceTypeEnum = "switch"
	GetNetworkTrafficDeviceTypeEnumAppliance GetNetworkTrafficDeviceTypeEnum = "appliance"
)

type GetNetworkTrafficQueryParams struct {
	DeviceType *GetNetworkTrafficDeviceTypeEnum `queryParam:"style=form,explode=true,name=deviceType"`
	T0         *string                          `queryParam:"style=form,explode=true,name=t0"`
	Timespan   *float32                         `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkTrafficRequest struct {
	PathParams  GetNetworkTrafficPathParams
	QueryParams GetNetworkTrafficQueryParams
}

type GetNetworkTrafficResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetNetworkTraffic200ApplicationJSONObject map[string]interface{}
}
