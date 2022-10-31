package operations

type GetDeviceSwitchPortsStatusesPacketsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceSwitchPortsStatusesPacketsQueryParams struct {
	T0       *string  `queryParam:"style=form,explode=true,name=t0"`
	Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetDeviceSwitchPortsStatusesPacketsRequest struct {
	PathParams  GetDeviceSwitchPortsStatusesPacketsPathParams
	QueryParams GetDeviceSwitchPortsStatusesPacketsQueryParams
}

type GetDeviceSwitchPortsStatusesPacketsResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetDeviceSwitchPortsStatusesPackets200ApplicationJSONObject map[string]interface{}
}
