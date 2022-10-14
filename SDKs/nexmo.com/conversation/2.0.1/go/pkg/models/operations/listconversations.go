package operations

import (
	"openapi/pkg/models/shared"
)

type ListConversationsQueryParams struct {
	DateEnd     *string           `queryParam:"style=form,explode=true,name=date_end"`
	DateStart   *string           `queryParam:"style=form,explode=true,name=date_start"`
	Order       *shared.OrderEnum `queryParam:"style=form,explode=true,name=order"`
	PageSize    *float64          `queryParam:"style=form,explode=true,name=page_size"`
	RecordIndex *float64          `queryParam:"style=form,explode=true,name=record_index"`
}

type ListConversationsRequest struct {
	QueryParams ListConversationsQueryParams
}

type ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type ListConversations200ApplicationJSONEmbeddedConversationsLinks struct {
	Self *ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf `json:"self,omitempty"`
}

type ListConversations200ApplicationJSONEmbeddedConversations struct {
	Links *ListConversations200ApplicationJSONEmbeddedConversationsLinks `json:"_links,omitempty"`
	Name  string                                                         `json:"name"`
	UUID  string                                                         `json:"uuid"`
}

type ListConversations200ApplicationJSONEmbedded struct {
	Conversations []ListConversations200ApplicationJSONEmbeddedConversations `json:"conversations"`
}

type ListConversations200ApplicationJSON struct {
	Embedded    ListConversations200ApplicationJSONEmbedded `json:"_embedded"`
	Links       shared.LinksConversationsList               `json:"_links"`
	Count       float64                                     `json:"count"`
	PageSize    float64                                     `json:"page_size"`
	RecordIndex float64                                     `json:"record_index"`
}

type ListConversationsResponse struct {
	ContentType                               string
	StatusCode                                int64
	ListConversations200ApplicationJSONObject *ListConversations200ApplicationJSON
}
