package operations

type GetObjectsWithReferenceCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectsWithReferenceCountUsingGetRequest struct {
	PathParams GetObjectsWithReferenceCountUsingGetPathParams
}

type GetObjectsWithReferenceCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
