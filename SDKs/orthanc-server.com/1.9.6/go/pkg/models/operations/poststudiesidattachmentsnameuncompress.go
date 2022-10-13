package operations

type PostStudiesIDAttachmentsNameUncompressPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostStudiesIDAttachmentsNameUncompressRequest struct {
	PathParams PostStudiesIDAttachmentsNameUncompressPathParams
}

type PostStudiesIDAttachmentsNameUncompressResponse struct {
	ContentType string
	StatusCode  int64
}
