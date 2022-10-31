package operations

type GetActiveObjectCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetActiveObjectCountUsingGetRequest struct {
	PathParams GetActiveObjectCountUsingGetPathParams
}

type GetActiveObjectCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
