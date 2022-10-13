package operations

type GetNetworkClientTrafficHistoryPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkClientTrafficHistoryQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetNetworkClientTrafficHistoryRequest struct {
	PathParams  GetNetworkClientTrafficHistoryPathParams
	QueryParams GetNetworkClientTrafficHistoryQueryParams
}

type GetNetworkClientTrafficHistoryResponse struct {
	ContentType                                            string
	Headers                                                map[string][]string
	StatusCode                                             int64
	GetNetworkClientTrafficHistory200ApplicationJSONObject map[string]interface{}
}
