package operations

type GetObjectsWithXdBsCountUsingGetPathParams struct {
	DateYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
	ObjectKey      int32  `pathParam:"style=simple,explode=false,name=objectKey"`
	SpeciesTypeKey int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectsWithXdBsCountUsingGetRequest struct {
	PathParams GetObjectsWithXdBsCountUsingGetPathParams
}

type GetObjectsWithXdBsCountUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
