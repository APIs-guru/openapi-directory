package operations

type GetNetworkTrafficShapingApplicationCategoriesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkTrafficShapingApplicationCategoriesRequest struct {
	PathParams GetNetworkTrafficShapingApplicationCategoriesPathParams
}

type GetNetworkTrafficShapingApplicationCategoriesResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetNetworkTrafficShapingApplicationCategories200ApplicationJSONObject map[string]interface{}
}
