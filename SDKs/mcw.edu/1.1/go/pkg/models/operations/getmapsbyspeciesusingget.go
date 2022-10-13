package operations

type GetMapsBySpeciesUsingGetPathParams struct {
	SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetMapsBySpeciesUsingGetRequest struct {
	PathParams GetMapsBySpeciesUsingGetPathParams
}

type GetMapsBySpeciesUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
