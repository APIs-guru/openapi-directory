package operations



type GetObjectsWithReferenceDiffUsingGetPathParams struct {
    DateFromYyyymmdd string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
    DateToYyyymmdd string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetObjectsWithReferenceDiffUsingGetRequest struct {
    PathParams GetObjectsWithReferenceDiffUsingGetPathParams 
    
}

type GetObjectsWithReferenceDiffUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

