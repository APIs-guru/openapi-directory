package operations

import (
"openapi/pkg/models/shared")

type GetEventsPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type GetEventsRequest struct {
    PathParams GetEventsPathParams 
    
}

type GetEventsResponse struct {
    ContentType string 
    StatusCode int64 
    EventRetrieveds []shared.EventRetrieved 
    
}

