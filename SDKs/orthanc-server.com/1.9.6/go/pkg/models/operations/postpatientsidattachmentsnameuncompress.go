package operations

type PostPatientsIDAttachmentsNameUncompressPathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostPatientsIDAttachmentsNameUncompressRequest struct {
	PathParams PostPatientsIDAttachmentsNameUncompressPathParams
}

type PostPatientsIDAttachmentsNameUncompressResponse struct {
	ContentType string
	StatusCode  int64
}
