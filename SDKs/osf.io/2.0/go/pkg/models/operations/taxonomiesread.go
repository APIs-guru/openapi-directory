package operations



type TaxonomiesReadPathParams struct {
    TaxonomyID string `pathParam:"style=simple,explode=false,name=taxonomy_id"`
    
}

type TaxonomiesReadRequest struct {
    PathParams TaxonomiesReadPathParams 
    
}

type TaxonomiesReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

