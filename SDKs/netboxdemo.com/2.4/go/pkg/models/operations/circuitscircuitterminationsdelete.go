package operations

type CircuitsCircuitTerminationsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitTerminationsDeleteRequest struct {
	PathParams CircuitsCircuitTerminationsDeletePathParams
}

type CircuitsCircuitTerminationsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
