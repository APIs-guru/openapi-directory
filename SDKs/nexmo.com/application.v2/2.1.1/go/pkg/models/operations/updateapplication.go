package operations

type UpdateApplicationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateApplicationRequest struct {
	PathParams UpdateApplicationPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksInboundURL struct {
	Address    *string `json:"address"`
	HTTPMethod *string `json:"http_method"`
}

type UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksStatusURL struct {
	Address    *string `json:"address"`
	HTTPMethod *string `json:"http_method"`
}

type UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooks struct {
	InboundURL *UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksInboundURL `json:"inbound_url"`
	StatusURL  *UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksStatusURL  `json:"status_url"`
}

type UpdateApplication200ApplicationJSONCapabilitiesMessages struct {
	Webhooks *UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooks `json:"webhooks"`
}

type UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooksEventURL struct {
	Address    *string `json:"address"`
	HTTPMethod *string `json:"http_method"`
}

type UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooks struct {
	EventURL *UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooksEventURL `json:"event_url"`
}

type UpdateApplication200ApplicationJSONCapabilitiesRtc struct {
	Webhooks *UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooks `json:"webhooks"`
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL struct {
	Address           *string `json:"address"`
	ConnectionTimeout *int64  `json:"connection_timeout"`
	HTTPMethod        *string `json:"http_method"`
	SocketTimeout     *int64  `json:"socket_timeout"`
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksEventURL struct {
	Address           *string `json:"address"`
	ConnectionTimeout *int64  `json:"connection_timeout"`
	HTTPMethod        *string `json:"http_method"`
	SocketTimeout     *int64  `json:"socket_timeout"`
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL struct {
	Address           *string `json:"address"`
	ConnectionTimeout *int64  `json:"connection_timeout"`
	HTTPMethod        *string `json:"http_method"`
	SocketTimeout     *int64  `json:"socket_timeout"`
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooks struct {
	AnswerURL         *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL         `json:"answer_url"`
	EventURL          *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksEventURL          `json:"event_url"`
	FallbackAnswerURL *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL `json:"fallback_answer_url"`
}

type UpdateApplication200ApplicationJSONCapabilitiesVoice struct {
	Webhooks *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooks `json:"webhooks"`
}

type UpdateApplication200ApplicationJSONCapabilities struct {
	Messages *UpdateApplication200ApplicationJSONCapabilitiesMessages `json:"messages"`
	Rtc      *UpdateApplication200ApplicationJSONCapabilitiesRtc      `json:"rtc"`
	Vbc      map[string]interface{}                                   `json:"vbc"`
	Voice    *UpdateApplication200ApplicationJSONCapabilitiesVoice    `json:"voice"`
}

type UpdateApplication200ApplicationJSONKeys struct {
	PrivateKey *string `json:"private_key"`
	PublicKey  *string `json:"public_key"`
}

type UpdateApplication200ApplicationJSONPrivacy struct {
	ImproveAi *bool `json:"improve_ai"`
}

type UpdateApplication200ApplicationJSON struct {
	Capabilities *UpdateApplication200ApplicationJSONCapabilities `json:"capabilities"`
	ID           *string                                          `json:"id"`
	Keys         *UpdateApplication200ApplicationJSONKeys         `json:"keys"`
	Name         *string                                          `json:"name"`
	Privacy      *UpdateApplication200ApplicationJSONPrivacy      `json:"privacy"`
}

type UpdateApplicationResponse struct {
	ContentType                               string
	StatusCode                                int64
	UpdateApplication200ApplicationJSONObject *UpdateApplication200ApplicationJSON
	UpdateApplication400ApplicationJSONAny    *interface{}
	UpdateApplication401ApplicationJSONAny    *interface{}
	UpdateApplication404ApplicationJSONAny    *interface{}
	UpdateApplication405ApplicationJSONAny    *interface{}
	UpdateApplication406ApplicationJSONAny    *interface{}
	UpdateApplication415ApplicationJSONAny    *interface{}
}
