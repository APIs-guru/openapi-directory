package operations

type CircuitsProvidersDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsProvidersDeleteRequest struct {
	PathParams CircuitsProvidersDeletePathParams
}

type CircuitsProvidersDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
