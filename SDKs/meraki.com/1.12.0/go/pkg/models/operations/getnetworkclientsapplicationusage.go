package operations

type GetNetworkClientsApplicationUsagePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkClientsApplicationUsageQueryParams struct {
	Clients       string   `queryParam:"style=form,explode=true,name=clients"`
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	SsidNumber    *int64   `queryParam:"style=form,explode=true,name=ssidNumber"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string  `queryParam:"style=form,explode=true,name=t0"`
	T1            *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkClientsApplicationUsageRequest struct {
	PathParams  GetNetworkClientsApplicationUsagePathParams
	QueryParams GetNetworkClientsApplicationUsageQueryParams
}

type GetNetworkClientsApplicationUsageResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetNetworkClientsApplicationUsage200ApplicationJSONObject map[string]interface{}
}
