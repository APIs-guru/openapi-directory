package operations



type InstitutionsUsersListPathParams struct {
    InstitutionID string `pathParam:"style=simple,explode=false,name=institution_id"`
    
}

type InstitutionsUsersListRequest struct {
    PathParams InstitutionsUsersListPathParams 
    
}

type InstitutionsUsersListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

