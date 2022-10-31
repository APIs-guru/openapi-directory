package operations



type DeleteEventPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    EventID string `pathParam:"style=simple,explode=false,name=event_id"`
    
}

type DeleteEventRequest struct {
    PathParams DeleteEventPathParams 
    
}

type DeleteEventResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteEvent200ApplicationJSONObject map[string]interface{} 
    
}

