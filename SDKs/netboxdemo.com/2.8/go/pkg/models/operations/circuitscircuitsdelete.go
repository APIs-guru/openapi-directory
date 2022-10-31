package operations

type CircuitsCircuitsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitsDeleteRequest struct {
	PathParams CircuitsCircuitsDeletePathParams
}

type CircuitsCircuitsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
