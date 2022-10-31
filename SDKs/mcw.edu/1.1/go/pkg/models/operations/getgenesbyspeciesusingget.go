package operations

type GetGenesBySpeciesUsingGetPathParams struct {
	SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetGenesBySpeciesUsingGetRequest struct {
	PathParams GetGenesBySpeciesUsingGetPathParams
}

type GetGenesBySpeciesUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
