package operations



type GetExpressionForTaxonUsingGetPathParams struct {
    TaxonID string `pathParam:"style=simple,explode=false,name=taxonId"`
    
}

type GetExpressionForTaxonUsingGetRequest struct {
    PathParams GetExpressionForTaxonUsingGetPathParams 
    
}

type GetExpressionForTaxonUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

