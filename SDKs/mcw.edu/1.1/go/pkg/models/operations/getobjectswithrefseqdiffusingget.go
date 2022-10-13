package operations

type GetObjectsWithRefSeqDiffUsingGetPathParams struct {
	DateFromYyyymmdd string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
	DateToYyyymmdd   string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
	SpeciesTypeKey   int32  `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
}

type GetObjectsWithRefSeqDiffUsingGetRequest struct {
	PathParams GetObjectsWithRefSeqDiffUsingGetPathParams
}

type GetObjectsWithRefSeqDiffUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
