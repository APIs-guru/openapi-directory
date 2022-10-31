package operations

type GetGeneBySymbolUsingGetPathParams struct {
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
	Symbol         string `pathParam:"style=simple,explode=false,name=symbol"`
}

type GetGeneBySymbolUsingGetRequest struct {
	PathParams GetGeneBySymbolUsingGetPathParams
}

type GetGeneBySymbolUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
