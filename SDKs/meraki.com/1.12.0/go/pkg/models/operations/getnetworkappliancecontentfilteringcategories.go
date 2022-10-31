package operations

type GetNetworkApplianceContentFilteringCategoriesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceContentFilteringCategoriesRequest struct {
	PathParams GetNetworkApplianceContentFilteringCategoriesPathParams
}

type GetNetworkApplianceContentFilteringCategoriesResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetNetworkApplianceContentFilteringCategories200ApplicationJSONObject map[string]interface{}
}
