package operations



type InstitutionsNodeListPathParams struct {
    InstitutionID string `pathParam:"style=simple,explode=false,name=institution_id"`
    
}

type InstitutionsNodeListRequest struct {
    PathParams InstitutionsNodeListPathParams 
    
}

type InstitutionsNodeListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

