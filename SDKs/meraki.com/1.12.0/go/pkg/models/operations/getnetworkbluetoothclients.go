package operations

type GetNetworkBluetoothClientsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkBluetoothClientsQueryParams struct {
	EndingBefore               *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	IncludeConnectivityHistory *bool    `queryParam:"style=form,explode=true,name=includeConnectivityHistory"`
	PerPage                    *int64   `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter              *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0                         *string  `queryParam:"style=form,explode=true,name=t0"`
	Timespan                   *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkBluetoothClientsRequest struct {
	PathParams  GetNetworkBluetoothClientsPathParams
	QueryParams GetNetworkBluetoothClientsQueryParams
}

type GetNetworkBluetoothClientsResponse struct {
	ContentType                                        string
	Headers                                            map[string][]string
	StatusCode                                         int64
	GetNetworkBluetoothClients200ApplicationJSONObject map[string]interface{}
}
