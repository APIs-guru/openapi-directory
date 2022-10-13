package operations

type GetChartInfoUsingGet1PathParams struct {
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
	TermString     string `pathParam:"style=simple,explode=false,name=termString"`
}

type GetChartInfoUsingGet1Request struct {
	PathParams GetChartInfoUsingGet1PathParams
}

type GetChartInfoUsingGet1Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
