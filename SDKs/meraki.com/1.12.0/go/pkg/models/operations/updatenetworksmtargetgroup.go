package operations

type UpdateNetworkSmTargetGroupPathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	TargetGroupID string `pathParam:"style=simple,explode=false,name=targetGroupId"`
}

type UpdateNetworkSmTargetGroupRequestBody struct {
	Name  *string `json:"name,omitempty"`
	Scope *string `json:"scope,omitempty"`
}

type UpdateNetworkSmTargetGroupRequest struct {
	PathParams UpdateNetworkSmTargetGroupPathParams
	Request    *UpdateNetworkSmTargetGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSmTargetGroupResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	UpdateNetworkSmTargetGroup200ApplicationJSONObject map[string]interface{}
}
