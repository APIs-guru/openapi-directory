package operations

type GetNetworkBluetoothClientPathParams struct {
	BluetoothClientID string `pathParam:"style=simple,explode=false,name=bluetoothClientId"`
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkBluetoothClientQueryParams struct {
	ConnectivityHistoryTimespan *int64 `queryParam:"style=form,explode=true,name=connectivityHistoryTimespan"`
	IncludeConnectivityHistory  *bool  `queryParam:"style=form,explode=true,name=includeConnectivityHistory"`
}

type GetNetworkBluetoothClientRequest struct {
	PathParams  GetNetworkBluetoothClientPathParams
	QueryParams GetNetworkBluetoothClientQueryParams
}

type GetNetworkBluetoothClientResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetNetworkBluetoothClient200ApplicationJSONObject map[string]interface{}
}
