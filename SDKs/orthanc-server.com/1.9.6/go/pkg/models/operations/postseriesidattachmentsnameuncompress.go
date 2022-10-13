package operations

type PostSeriesIDAttachmentsNameUncompressPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostSeriesIDAttachmentsNameUncompressRequest struct {
	PathParams PostSeriesIDAttachmentsNameUncompressPathParams
}

type PostSeriesIDAttachmentsNameUncompressResponse struct {
	ContentType string
	StatusCode  int64
}
