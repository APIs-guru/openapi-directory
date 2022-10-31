package operations

import (
"openapi/pkg/models/shared")

type GetEventPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    EventID string `pathParam:"style=simple,explode=false,name=event_id"`
    
}

type GetEventRequest struct {
    PathParams GetEventPathParams 
    
}

type GetEventResponse struct {
    ContentType string 
    StatusCode int64 
    EventRetrieved *shared.EventRetrieved 
    
}

