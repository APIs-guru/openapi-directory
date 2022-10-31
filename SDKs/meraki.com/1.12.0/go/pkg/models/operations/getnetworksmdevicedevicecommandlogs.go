package operations

type GetNetworkSmDeviceDeviceCommandLogsPathParams struct {
	DeviceID  string `pathParam:"style=simple,explode=false,name=deviceId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDeviceDeviceCommandLogsQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetNetworkSmDeviceDeviceCommandLogsRequest struct {
	PathParams  GetNetworkSmDeviceDeviceCommandLogsPathParams
	QueryParams GetNetworkSmDeviceDeviceCommandLogsQueryParams
}

type GetNetworkSmDeviceDeviceCommandLogsResponse struct {
	ContentType                                                 string
	Headers                                                     map[string][]string
	StatusCode                                                  int64
	GetNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObject map[string]interface{}
}
