package operations



type GetPhenotypesForTaxonUsingGetPathParams struct {
    TaxonID string `pathParam:"style=simple,explode=false,name=taxonId"`
    
}

type GetPhenotypesForTaxonUsingGetRequest struct {
    PathParams GetPhenotypesForTaxonUsingGetPathParams 
    
}

type GetPhenotypesForTaxonUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

