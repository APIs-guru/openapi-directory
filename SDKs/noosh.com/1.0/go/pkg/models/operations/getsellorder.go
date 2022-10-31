package operations

type GetSellOrderPathParams struct {
	OrderID     string `pathParam:"style=simple,explode=false,name=order_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSellOrderRequest struct {
	PathParams GetSellOrderPathParams
}

type GetSellOrderResponse struct {
	Body          []byte
	ContentType   string
	HTTPStatusVo  *interface{}
	OrderDetailVo *interface{}
	StatusCode    int64
}
