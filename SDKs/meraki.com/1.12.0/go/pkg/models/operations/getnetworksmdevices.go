package operations

type GetNetworkSmDevicesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDevicesQueryParams struct {
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	Fields        []string `queryParam:"style=form,explode=false,name=fields"`
	Ids           []string `queryParam:"style=form,explode=false,name=ids"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	Scope         []string `queryParam:"style=form,explode=false,name=scope"`
	Serials       []string `queryParam:"style=form,explode=false,name=serials"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	WifiMacs      []string `queryParam:"style=form,explode=false,name=wifiMacs"`
}

type GetNetworkSmDevicesRequest struct {
	PathParams  GetNetworkSmDevicesPathParams
	QueryParams GetNetworkSmDevicesQueryParams
}

type GetNetworkSmDevicesResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	GetNetworkSmDevices200ApplicationJSONObject map[string]interface{}
}
