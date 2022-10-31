package operations



type GetProteinInteractionCountUsingGetPathParams struct {
    DateYyyymmdd string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetProteinInteractionCountUsingGetRequest struct {
    PathParams GetProteinInteractionCountUsingGetPathParams 
    
}

type GetProteinInteractionCountUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

