package operations

type GetNetworkApplianceUplinksUsageHistoryPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceUplinksUsageHistoryQueryParams struct {
	Resolution *int64   `queryParam:"style=form,explode=true,name=resolution"`
	T0         *string  `queryParam:"style=form,explode=true,name=t0"`
	T1         *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan   *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkApplianceUplinksUsageHistoryRequest struct {
	PathParams  GetNetworkApplianceUplinksUsageHistoryPathParams
	QueryParams GetNetworkApplianceUplinksUsageHistoryQueryParams
}

type GetNetworkApplianceUplinksUsageHistoryResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	GetNetworkApplianceUplinksUsageHistory200ApplicationJSONObject map[string]interface{}
}
