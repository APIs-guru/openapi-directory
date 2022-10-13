package operations

type GetNetworkSmDeviceConnectivityPathParams struct {
	DeviceID  string `pathParam:"style=simple,explode=false,name=deviceId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDeviceConnectivityQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetNetworkSmDeviceConnectivityRequest struct {
	PathParams  GetNetworkSmDeviceConnectivityPathParams
	QueryParams GetNetworkSmDeviceConnectivityQueryParams
}

type GetNetworkSmDeviceConnectivityResponse struct {
	ContentType                                            string
	Headers                                                map[string][]string
	StatusCode                                             int64
	GetNetworkSmDeviceConnectivity200ApplicationJSONObject map[string]interface{}
}
