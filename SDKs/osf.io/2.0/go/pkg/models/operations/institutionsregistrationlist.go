package operations



type InstitutionsRegistrationListPathParams struct {
    InstitutionID string `pathParam:"style=simple,explode=false,name=institution_id"`
    
}

type InstitutionsRegistrationListRequest struct {
    PathParams InstitutionsRegistrationListPathParams 
    
}

type InstitutionsRegistrationListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

