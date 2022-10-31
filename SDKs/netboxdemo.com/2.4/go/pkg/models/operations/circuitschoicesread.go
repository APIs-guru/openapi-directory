package operations

type CircuitsChoicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsChoicesReadRequest struct {
	PathParams CircuitsChoicesReadPathParams
}

type CircuitsChoicesReadResponse struct {
	ContentType string
	StatusCode  int64
}
