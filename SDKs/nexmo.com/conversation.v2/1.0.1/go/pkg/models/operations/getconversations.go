package operations

import (
	"openapi/pkg/models/shared"
)

type GetConversationsQueryParams struct {
	Cursor    *string           `queryParam:"style=form,explode=true,name=cursor"`
	DateEnd   *string           `queryParam:"style=form,explode=true,name=date_end"`
	DateStart *string           `queryParam:"style=form,explode=true,name=date_start"`
	Order     *shared.OrderEnum `queryParam:"style=form,explode=true,name=order"`
	PageSize  *int64            `queryParam:"style=form,explode=true,name=page_size"`
}

type GetConversationsRequest struct {
	QueryParams GetConversationsQueryParams
}

type GetConversationsResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetConversations200ApplicationJSONAny *interface{}
}
