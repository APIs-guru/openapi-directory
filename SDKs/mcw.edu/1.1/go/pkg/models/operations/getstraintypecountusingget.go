package operations

type GetStrainTypeCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetStrainTypeCountUsingGetRequest struct {
	PathParams GetStrainTypeCountUsingGetPathParams
}

type GetStrainTypeCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
