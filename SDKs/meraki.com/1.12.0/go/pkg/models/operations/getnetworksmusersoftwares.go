package operations

type GetNetworkSmUserSoftwaresPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetNetworkSmUserSoftwaresRequest struct {
	PathParams GetNetworkSmUserSoftwaresPathParams
}

type GetNetworkSmUserSoftwaresResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetNetworkSmUserSoftwares200ApplicationJSONObject map[string]interface{}
}
