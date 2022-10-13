package operations

type GetReceivedTimeCardListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetReceivedTimeCardListRequest struct {
	PathParams GetReceivedTimeCardListPathParams
}

type GetReceivedTimeCardListResponse struct {
	Body           []byte
	ContentType    string
	HTTPStatusVo   *interface{}
	StatusCode     int64
	TimeCardListVo *interface{}
}
