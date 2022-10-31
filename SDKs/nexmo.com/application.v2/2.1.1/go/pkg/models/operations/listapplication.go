package operations



type ListApplicationQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type ListApplicationRequest struct {
    QueryParams ListApplicationQueryParams 
    
}

type ListApplicationResponse struct {
    ApplicationResponseCollection *interface{} 
    ContentType string 
    StatusCode int64 
    ListApplication400ApplicationJSONAny *interface{} 
    ListApplication401ApplicationJSONAny *interface{} 
    ListApplication405ApplicationJSONAny *interface{} 
    ListApplication406ApplicationJSONAny *interface{} 
    
}

