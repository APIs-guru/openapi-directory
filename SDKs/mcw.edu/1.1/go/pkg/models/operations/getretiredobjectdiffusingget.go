package operations



type GetRetiredObjectDiffUsingGetPathParams struct {
    DateFromYyyymmdd string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
    DateToYyyymmdd string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetRetiredObjectDiffUsingGetRequest struct {
    PathParams GetRetiredObjectDiffUsingGetPathParams 
    
}

type GetRetiredObjectDiffUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

