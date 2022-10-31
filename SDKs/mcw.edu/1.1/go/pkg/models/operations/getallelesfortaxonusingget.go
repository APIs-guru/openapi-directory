package operations



type GetAllelesForTaxonUsingGetPathParams struct {
    TaxonID string `pathParam:"style=simple,explode=false,name=taxonId"`
    
}

type GetAllelesForTaxonUsingGetRequest struct {
    PathParams GetAllelesForTaxonUsingGetPathParams 
    
}

type GetAllelesForTaxonUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

