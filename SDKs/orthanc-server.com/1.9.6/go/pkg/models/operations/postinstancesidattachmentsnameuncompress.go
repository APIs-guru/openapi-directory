package operations

type PostInstancesIDAttachmentsNameUncompressPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostInstancesIDAttachmentsNameUncompressRequest struct {
	PathParams PostInstancesIDAttachmentsNameUncompressPathParams
}

type PostInstancesIDAttachmentsNameUncompressResponse struct {
	ContentType string
	StatusCode  int64
}
