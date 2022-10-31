package operations

type GetMappedQtlByPositionUsingGetPathParams struct {
	Chr    string `pathParam:"style=simple,explode=false,name=chr"`
	MapKey int32  `pathParam:"style=simple,explode=false,name=mapKey"`
	Start  int64  `pathParam:"style=simple,explode=false,name=start"`
	Stop   int64  `pathParam:"style=simple,explode=false,name=stop"`
}

type GetMappedQtlByPositionUsingGetRequest struct {
	PathParams GetMappedQtlByPositionUsingGetPathParams
}

type GetMappedQtlByPositionUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
