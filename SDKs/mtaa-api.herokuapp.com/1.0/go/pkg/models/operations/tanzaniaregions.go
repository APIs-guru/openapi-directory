package operations

type TanzaniaRegionsPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
}

type TanzaniaRegionsRequest struct {
	PathParams TanzaniaRegionsPathParams
}

type TanzaniaRegionsResponse struct {
	ContentType string
	StatusCode  int64
}
