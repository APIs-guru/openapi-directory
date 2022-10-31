package operations

type GetNetworkSmDeviceDesktopLogsPathParams struct {
	DeviceID  string `pathParam:"style=simple,explode=false,name=deviceId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDeviceDesktopLogsQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetNetworkSmDeviceDesktopLogsRequest struct {
	PathParams  GetNetworkSmDeviceDesktopLogsPathParams
	QueryParams GetNetworkSmDeviceDesktopLogsQueryParams
}

type GetNetworkSmDeviceDesktopLogsResponse struct {
	ContentType                                           string
	Headers                                               map[string][]string
	StatusCode                                            int64
	GetNetworkSmDeviceDesktopLogs200ApplicationJSONObject map[string]interface{}
}
