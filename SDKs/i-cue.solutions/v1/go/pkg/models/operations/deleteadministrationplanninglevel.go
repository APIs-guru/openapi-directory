package operations



type DeleteAdministrationPlanningLevelHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type DeleteAdministrationPlanningLevelRequest struct {
    Headers DeleteAdministrationPlanningLevelHeaders 
    
}

type DeleteAdministrationPlanningLevelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

