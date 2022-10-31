package operations

type DeleteImagesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteImagesIDRequest struct {
	PathParams DeleteImagesIDPathParams
}

type DeleteImagesIDResponse struct {
	ContentType string
	StatusCode  int64
}
