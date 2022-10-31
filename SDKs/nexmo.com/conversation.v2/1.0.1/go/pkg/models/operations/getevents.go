package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type GetEventsQueryParams struct {
	Cursor    *string           `queryParam:"style=form,explode=true,name=cursor"`
	EndID     *string           `queryParam:"style=form,explode=true,name=end_id"`
	EventType *string           `queryParam:"style=form,explode=true,name=event_type"`
	Order     *shared.OrderEnum `queryParam:"style=form,explode=true,name=order"`
	PageSize  *int64            `queryParam:"style=form,explode=true,name=page_size"`
	StartID   *string           `queryParam:"style=form,explode=true,name=start_id"`
}

type GetEventsRequest struct {
	PathParams  GetEventsPathParams
	QueryParams GetEventsQueryParams
}

type GetEventsResponse struct {
	ContentType                    string
	StatusCode                     int64
	GetEvents200ApplicationJSONAny *interface{}
}
