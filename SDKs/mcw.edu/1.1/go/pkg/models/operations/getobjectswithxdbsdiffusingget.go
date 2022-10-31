package operations

type GetObjectsWithXdBsDiffUsingGetPathParams struct {
	DateFromYyyymmdd string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	ObjectKey        int32  `pathParam:"style=simple,explode=false,name=objectKey"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectsWithXdBsDiffUsingGetRequest struct {
	PathParams GetObjectsWithXdBsDiffUsingGetPathParams
}

type GetObjectsWithXdBsDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
