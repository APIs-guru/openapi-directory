package operations

type ModifyNetworkSmDevicesTagsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type ModifyNetworkSmDevicesTagsRequestBody struct {
	Ids          []string `json:"ids"`
	Scope        []string `json:"scope"`
	Serials      []string `json:"serials"`
	Tags         []string `json:"tags"`
	UpdateAction string   `json:"updateAction"`
	WifiMacs     []string `json:"wifiMacs"`
}

type ModifyNetworkSmDevicesTagsRequest struct {
	PathParams ModifyNetworkSmDevicesTagsPathParams
	Request    ModifyNetworkSmDevicesTagsRequestBody `request:"mediaType=application/json"`
}

type ModifyNetworkSmDevicesTagsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ModifyNetworkSmDevicesTags200ApplicationJSONObject map[string]interface{}
}
