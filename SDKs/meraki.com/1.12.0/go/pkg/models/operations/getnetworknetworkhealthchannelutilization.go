package operations

type GetNetworkNetworkHealthChannelUtilizationPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkNetworkHealthChannelUtilizationQueryParams struct {
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	Resolution    *int64   `queryParam:"style=form,explode=true,name=resolution"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string  `queryParam:"style=form,explode=true,name=t0"`
	T1            *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkNetworkHealthChannelUtilizationRequest struct {
	PathParams  GetNetworkNetworkHealthChannelUtilizationPathParams
	QueryParams GetNetworkNetworkHealthChannelUtilizationQueryParams
}

type GetNetworkNetworkHealthChannelUtilizationResponse struct {
	ContentType                                                       string
	Headers                                                           map[string][]string
	StatusCode                                                        int64
	GetNetworkNetworkHealthChannelUtilization200ApplicationJSONObject map[string]interface{}
}
