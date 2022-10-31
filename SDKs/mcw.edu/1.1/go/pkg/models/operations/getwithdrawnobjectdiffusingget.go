package operations



type GetWithdrawnObjectDiffUsingGetPathParams struct {
    DateFromYyyymmdd string `pathParam:"style=simple,explode=false,name=dateFromYYYYMMDD"`
    DateToYyyymmdd string `pathParam:"style=simple,explode=false,name=dateToYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetWithdrawnObjectDiffUsingGetRequest struct {
    PathParams GetWithdrawnObjectDiffUsingGetPathParams 
    
}

type GetWithdrawnObjectDiffUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

