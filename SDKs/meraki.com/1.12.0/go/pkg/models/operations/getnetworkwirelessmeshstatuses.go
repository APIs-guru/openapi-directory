package operations

type GetNetworkWirelessMeshStatusesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessMeshStatusesQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetNetworkWirelessMeshStatusesRequest struct {
	PathParams  GetNetworkWirelessMeshStatusesPathParams
	QueryParams GetNetworkWirelessMeshStatusesQueryParams
}

type GetNetworkWirelessMeshStatusesResponse struct {
	ContentType                                            string
	Headers                                                map[string][]string
	StatusCode                                             int64
	GetNetworkWirelessMeshStatuses200ApplicationJSONObject map[string]interface{}
}
