package operations



type GetModalitiesQueryParams struct {
    Expand *string `queryParam:"style=form,explode=true,name=expand"`
    
}

type GetModalitiesRequest struct {
    QueryParams GetModalitiesQueryParams 
    
}

type GetModalitiesResponse struct {
    ContentType string 
    GetModalities200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

