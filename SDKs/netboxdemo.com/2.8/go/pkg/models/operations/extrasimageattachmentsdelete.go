package operations

type ExtrasImageAttachmentsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasImageAttachmentsDeleteRequest struct {
	PathParams ExtrasImageAttachmentsDeletePathParams
}

type ExtrasImageAttachmentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
