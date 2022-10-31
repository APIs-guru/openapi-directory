package operations



type GetAffectedGenomicModelsUsingGetPathParams struct {
    TaxonID string `pathParam:"style=simple,explode=false,name=taxonId"`
    
}

type GetAffectedGenomicModelsUsingGetRequest struct {
    PathParams GetAffectedGenomicModelsUsingGetPathParams 
    
}

type GetAffectedGenomicModelsUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

