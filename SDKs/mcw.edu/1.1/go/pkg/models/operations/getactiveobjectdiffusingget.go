package operations



type GetActiveObjectDiffUsingGetPathParams struct {
    DateFromYyyymmdd string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
    DateToYyyymmdd string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetActiveObjectDiffUsingGetRequest struct {
    PathParams GetActiveObjectDiffUsingGetPathParams 
    
}

type GetActiveObjectDiffUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

