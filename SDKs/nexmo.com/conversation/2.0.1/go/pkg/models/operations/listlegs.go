package operations

import (
	"openapi/pkg/models/shared"
)

type ListLegs200ApplicationJSONEmbeddedLegs struct {
	Embedded         map[string]interface{}  `json:"_embedded,omitempty"`
	Links            map[string]interface{}  `json:"_links,omitempty"`
	ConversationUUID *string                 `json:"conversation_uuid,omitempty"`
	From             map[string]interface{}  `json:"from,omitempty"`
	StartEnd         *string                 `json:"start_end,omitempty"`
	StartTime        *string                 `json:"start_time,omitempty"`
	State            *shared.LegStateEnum    `json:"state,omitempty"`
	To               map[string]interface{}  `json:"to,omitempty"`
	Type             *shared.ChannelTypeEnum `json:"type,omitempty"`
	UUID             string                  `json:"uuid"`
}

type ListLegs200ApplicationJSONEmbedded struct {
	Legs []ListLegs200ApplicationJSONEmbeddedLegs `json:"legs"`
}

type ListLegs200ApplicationJSONLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type ListLegs200ApplicationJSONLinks struct {
	Self ListLegs200ApplicationJSONLinksSelf `json:"self"`
}

type ListLegs200ApplicationJSON struct {
	Embedded    ListLegs200ApplicationJSONEmbedded `json:"_embedded"`
	Links       ListLegs200ApplicationJSONLinks    `json:"_links"`
	Count       float64                            `json:"count"`
	PageSize    float64                            `json:"page_size"`
	RecordIndex float64                            `json:"record_index"`
}

type ListLegsResponse struct {
	ContentType                      string
	StatusCode                       int64
	ListLegs200ApplicationJSONObject *ListLegs200ApplicationJSON
}
