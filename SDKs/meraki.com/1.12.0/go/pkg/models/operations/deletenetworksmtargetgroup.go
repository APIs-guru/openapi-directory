package operations

type DeleteNetworkSmTargetGroupPathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	TargetGroupID string `pathParam:"style=simple,explode=false,name=targetGroupId"`
}

type DeleteNetworkSmTargetGroupRequest struct {
	PathParams DeleteNetworkSmTargetGroupPathParams
}

type DeleteNetworkSmTargetGroupResponse struct {
	ContentType string
	StatusCode  int64
}
