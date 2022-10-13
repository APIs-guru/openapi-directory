package operations

type GetNetworkSwitchAccessControlListsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchAccessControlListsRequest struct {
	PathParams GetNetworkSwitchAccessControlListsPathParams
}

type GetNetworkSwitchAccessControlListsResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	GetNetworkSwitchAccessControlLists200ApplicationJSONObject map[string]interface{}
}
