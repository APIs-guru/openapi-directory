package operations

type GetXdbsCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetXdbsCountUsingGetRequest struct {
	PathParams GetXdbsCountUsingGetPathParams
}

type GetXdbsCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
