package operations



type GetSetupV1CalendarsQueryParams struct {
    Deleted *bool `queryParam:"style=form,explode=true,name=deleted"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetSetupV1CalendarsRequest struct {
    QueryParams GetSetupV1CalendarsQueryParams 
    
}

type GetSetupV1CalendarsResponse struct {
    ContentType string 
    ScheduleListViewModel map[string]interface{} 
    StatusCode int64 
    
}

