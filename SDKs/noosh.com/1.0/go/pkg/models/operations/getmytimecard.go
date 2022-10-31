package operations

type GetMyTimeCardPathParams struct {
	TimeCardID  string `pathParam:"style=simple,explode=false,name=timeCard_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetMyTimeCardRequest struct {
	PathParams GetMyTimeCardPathParams
}

type GetMyTimeCardResponse struct {
	Body             []byte
	ContentType      string
	HTTPStatusVo     *interface{}
	StatusCode       int64
	TimeCardDetailVo *interface{}
}
