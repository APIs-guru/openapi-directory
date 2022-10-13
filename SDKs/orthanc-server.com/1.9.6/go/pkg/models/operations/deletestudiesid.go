package operations

type DeleteStudiesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteStudiesIDRequest struct {
	PathParams DeleteStudiesIDPathParams
}

type DeleteStudiesIDResponse struct {
	ContentType string
	StatusCode  int64
}
