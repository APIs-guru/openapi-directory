package operations

type GetNetworkClientsUsageHistoriesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkClientsUsageHistoriesQueryParams struct {
	Clients       string   `queryParam:"style=form,explode=true,name=clients"`
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	SsidNumber    *int64   `queryParam:"style=form,explode=true,name=ssidNumber"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string  `queryParam:"style=form,explode=true,name=t0"`
	T1            *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkClientsUsageHistoriesRequest struct {
	PathParams  GetNetworkClientsUsageHistoriesPathParams
	QueryParams GetNetworkClientsUsageHistoriesQueryParams
}

type GetNetworkClientsUsageHistoriesResponse struct {
	ContentType                                             string
	Headers                                                 map[string][]string
	StatusCode                                              int64
	GetNetworkClientsUsageHistories200ApplicationJSONObject map[string]interface{}
}
