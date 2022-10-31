package operations



type GetObjectsWithRefSeqCountUsingGetPathParams struct {
    DateYyyymmdd string `pathParam:"style=simple,explode=false,name=dateYYYYMMDD"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetObjectsWithRefSeqCountUsingGetRequest struct {
    PathParams GetObjectsWithRefSeqCountUsingGetPathParams 
    
}

type GetObjectsWithRefSeqCountUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

