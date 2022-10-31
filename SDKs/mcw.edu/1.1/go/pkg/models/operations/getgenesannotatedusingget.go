package operations



type GetGenesAnnotatedUsingGetPathParams struct {
    AccID string `pathParam:"style=simple,explode=false,name=accId"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetGenesAnnotatedUsingGetRequest struct {
    PathParams GetGenesAnnotatedUsingGetPathParams 
    
}

type GetGenesAnnotatedUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

