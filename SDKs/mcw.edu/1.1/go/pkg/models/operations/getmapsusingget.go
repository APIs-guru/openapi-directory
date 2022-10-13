package operations

type GetMapsUsingGetPathParams struct {
	SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetMapsUsingGetRequest struct {
	PathParams GetMapsUsingGetPathParams
}

type GetMapsUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
