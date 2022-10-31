package operations



type GetPlanIDPathParams struct {
    PlanID string `pathParam:"style=simple,explode=false,name=planId"`
    
}

type GetPlanIDQueryParams struct {
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    
}

type GetPlanIDRequest struct {
    PathParams GetPlanIDPathParams 
    QueryParams GetPlanIDQueryParams 
    
}

type GetPlanIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

