package operations

type GetNetworkSmTargetGroupsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmTargetGroupsQueryParams struct {
	WithDetails *bool `queryParam:"style=form,explode=true,name=withDetails"`
}

type GetNetworkSmTargetGroupsRequest struct {
	PathParams  GetNetworkSmTargetGroupsPathParams
	QueryParams GetNetworkSmTargetGroupsQueryParams
}

type GetNetworkSmTargetGroupsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetNetworkSmTargetGroups200ApplicationJSONObject map[string]interface{}
}
