package operations

type DeleteInstancesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteInstancesIDRequest struct {
	PathParams DeleteInstancesIDPathParams
}

type DeleteInstancesIDResponse struct {
	ContentType string
	StatusCode  int64
}
