package operations

type GetQtlListByPositionUsingGetPathParams struct {
	Chr    string `pathParam:"style=simple,explode=false,name=chr"`
	MapKey int32  `pathParam:"style=simple,explode=false,name=mapKey"`
	Start  int64  `pathParam:"style=simple,explode=false,name=start"`
	Stop   int64  `pathParam:"style=simple,explode=false,name=stop"`
}

type GetQtlListByPositionUsingGetRequest struct {
	PathParams GetQtlListByPositionUsingGetPathParams
}

type GetQtlListByPositionUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
