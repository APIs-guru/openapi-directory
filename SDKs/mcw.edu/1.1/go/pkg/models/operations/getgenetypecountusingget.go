package operations

type GetGeneTypeCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetGeneTypeCountUsingGetRequest struct {
	PathParams GetGeneTypeCountUsingGetPathParams
}

type GetGeneTypeCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
