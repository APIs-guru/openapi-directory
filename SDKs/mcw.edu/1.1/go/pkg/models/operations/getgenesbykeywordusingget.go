package operations

type GetGenesByKeywordUsingGetPathParams struct {
	Keyword        string `pathParam:"style=simple,explode=false,name=keyword"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetGenesByKeywordUsingGetRequest struct {
	PathParams GetGenesByKeywordUsingGetPathParams
}

type GetGenesByKeywordUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
