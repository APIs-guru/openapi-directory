package operations

type GetDeviceClientsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type GetDeviceClientsQueryParams struct {
	T0       *string  `queryParam:"style=form,explode=true,name=t0"`
	Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetDeviceClientsRequest struct {
	PathParams  GetDeviceClientsPathParams
	QueryParams GetDeviceClientsQueryParams
}

type GetDeviceClientsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetDeviceClients200ApplicationJSONObject map[string]interface{}
}
