package operations

type CheckinNetworkSmDevicesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CheckinNetworkSmDevicesRequestBody struct {
	Ids      []string `json:"ids"`
	Scope    []string `json:"scope"`
	Serials  []string `json:"serials"`
	WifiMacs []string `json:"wifiMacs"`
}

type CheckinNetworkSmDevicesRequest struct {
	PathParams CheckinNetworkSmDevicesPathParams
	Request    *CheckinNetworkSmDevicesRequestBody `request:"mediaType=application/json"`
}

type CheckinNetworkSmDevicesResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CheckinNetworkSmDevices200ApplicationJSONObject map[string]interface{}
}
