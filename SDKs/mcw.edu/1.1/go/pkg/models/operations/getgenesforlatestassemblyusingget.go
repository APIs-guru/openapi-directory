package operations



type GetGenesForLatestAssemblyUsingGetPathParams struct {
    TaxonID string `pathParam:"style=simple,explode=false,name=taxonId"`
    
}

type GetGenesForLatestAssemblyUsingGetRequest struct {
    PathParams GetGenesForLatestAssemblyUsingGetPathParams 
    
}

type GetGenesForLatestAssemblyUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

