package operations



type GetGenesByAffyIDUsingGetPathParams struct {
    AffyID string `pathParam:"style=simple,explode=false,name=affyId"`
    SpeciesTypeKey int32 `pathParam:"style=simple,explode=false,name=speciesTypeKey"`
    
}

type GetGenesByAffyIDUsingGetRequest struct {
    PathParams GetGenesByAffyIDUsingGetPathParams 
    
}

type GetGenesByAffyIDUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

