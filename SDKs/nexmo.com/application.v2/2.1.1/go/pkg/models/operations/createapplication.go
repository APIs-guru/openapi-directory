package operations

type CreateApplicationRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksInboundURL struct {
	Address    *string `json:"address"`
	HTTPMethod *string `json:"http_method"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksStatusURL struct {
	Address    *string `json:"address"`
	HTTPMethod *string `json:"http_method"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooks struct {
	InboundURL *CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksInboundURL `json:"inbound_url"`
	StatusURL  *CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksStatusURL  `json:"status_url"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessages struct {
	Webhooks *CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooks `json:"webhooks"`
}

type CreateApplication201ApplicationJSONCapabilitiesRtcWebhooksEventURL struct {
	Address    *string `json:"address"`
	HTTPMethod *string `json:"http_method"`
}

type CreateApplication201ApplicationJSONCapabilitiesRtcWebhooks struct {
	EventURL *CreateApplication201ApplicationJSONCapabilitiesRtcWebhooksEventURL `json:"event_url"`
}

type CreateApplication201ApplicationJSONCapabilitiesRtc struct {
	Webhooks *CreateApplication201ApplicationJSONCapabilitiesRtcWebhooks `json:"webhooks"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL struct {
	Address           *string `json:"address"`
	ConnectionTimeout *int64  `json:"connection_timeout"`
	HTTPMethod        *string `json:"http_method"`
	SocketTimeout     *int64  `json:"socket_timeout"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksEventURL struct {
	Address           *string `json:"address"`
	ConnectionTimeout *int64  `json:"connection_timeout"`
	HTTPMethod        *string `json:"http_method"`
	SocketTimeout     *int64  `json:"socket_timeout"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL struct {
	Address           *string `json:"address"`
	ConnectionTimeout *int64  `json:"connection_timeout"`
	HTTPMethod        *string `json:"http_method"`
	SocketTimeout     *int64  `json:"socket_timeout"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooks struct {
	AnswerURL         *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL         `json:"answer_url"`
	EventURL          *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksEventURL          `json:"event_url"`
	FallbackAnswerURL *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL `json:"fallback_answer_url"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoice struct {
	Webhooks *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooks `json:"webhooks"`
}

type CreateApplication201ApplicationJSONCapabilities struct {
	Messages *CreateApplication201ApplicationJSONCapabilitiesMessages `json:"messages"`
	Rtc      *CreateApplication201ApplicationJSONCapabilitiesRtc      `json:"rtc"`
	Vbc      map[string]interface{}                                   `json:"vbc"`
	Voice    *CreateApplication201ApplicationJSONCapabilitiesVoice    `json:"voice"`
}

type CreateApplication201ApplicationJSONKeys struct {
	PrivateKey *string `json:"private_key"`
	PublicKey  *string `json:"public_key"`
}

type CreateApplication201ApplicationJSONPrivacy struct {
	ImproveAi *bool `json:"improve_ai"`
}

type CreateApplication201ApplicationJSON struct {
	Capabilities *CreateApplication201ApplicationJSONCapabilities `json:"capabilities"`
	ID           *string                                          `json:"id"`
	Keys         *CreateApplication201ApplicationJSONKeys         `json:"keys"`
	Name         *string                                          `json:"name"`
	Privacy      *CreateApplication201ApplicationJSONPrivacy      `json:"privacy"`
}

type CreateApplicationResponse struct {
	ContentType                               string
	StatusCode                                int64
	CreateApplication201ApplicationJSONObject *CreateApplication201ApplicationJSON
	CreateApplication400ApplicationJSONAny    *interface{}
	CreateApplication401ApplicationJSONAny    *interface{}
	CreateApplication405ApplicationJSONAny    *interface{}
	CreateApplication406ApplicationJSONAny    *interface{}
	CreateApplication415ApplicationJSONAny    *interface{}
}
