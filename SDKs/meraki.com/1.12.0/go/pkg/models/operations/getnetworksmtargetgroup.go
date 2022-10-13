package operations

type GetNetworkSmTargetGroupPathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	TargetGroupID string `pathParam:"style=simple,explode=false,name=targetGroupId"`
}

type GetNetworkSmTargetGroupQueryParams struct {
	WithDetails *bool `queryParam:"style=form,explode=true,name=withDetails"`
}

type GetNetworkSmTargetGroupRequest struct {
	PathParams  GetNetworkSmTargetGroupPathParams
	QueryParams GetNetworkSmTargetGroupQueryParams
}

type GetNetworkSmTargetGroupResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetNetworkSmTargetGroup200ApplicationJSONObject map[string]interface{}
}
