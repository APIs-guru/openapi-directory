package operations

import (
	"openapi/pkg/models/shared"
)

type ListLegs200ApplicationJSONEmbeddedLegs struct {
	Embedded         map[string]interface{}  `json:"_embedded"`
	Links            map[string]interface{}  `json:"_links"`
	ConversationUUID *string                 `json:"conversation_uuid"`
	From             map[string]interface{}  `json:"from"`
	StartEnd         *string                 `json:"start_end"`
	StartTime        *string                 `json:"start_time"`
	State            *shared.LegStateEnum    `json:"state"`
	To               map[string]interface{}  `json:"to"`
	Type             *shared.ChannelTypeEnum `json:"type"`
	UUID             string                  `json:"uuid"`
}

type ListLegs200ApplicationJSONEmbedded struct {
	Legs []ListLegs200ApplicationJSONEmbeddedLegs `json:"legs"`
}

type ListLegs200ApplicationJSONLinksSelf struct {
	Href *string `json:"href"`
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
