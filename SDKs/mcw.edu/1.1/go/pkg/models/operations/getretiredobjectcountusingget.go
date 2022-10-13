package operations

type GetRetiredObjectCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetRetiredObjectCountUsingGetRequest struct {
	PathParams GetRetiredObjectCountUsingGetPathParams
}

type GetRetiredObjectCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
