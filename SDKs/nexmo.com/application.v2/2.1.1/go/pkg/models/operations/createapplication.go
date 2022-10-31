package operations

type CreateApplicationRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksInboundURL struct {
	Address    *string `json:"address,omitempty"`
	HTTPMethod *string `json:"http_method,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksStatusURL struct {
	Address    *string `json:"address,omitempty"`
	HTTPMethod *string `json:"http_method,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooks struct {
	InboundURL *CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksInboundURL `json:"inbound_url,omitempty"`
	StatusURL  *CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooksStatusURL  `json:"status_url,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesMessages struct {
	Webhooks *CreateApplication201ApplicationJSONCapabilitiesMessagesWebhooks `json:"webhooks,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesRtcWebhooksEventURL struct {
	Address    *string `json:"address,omitempty"`
	HTTPMethod *string `json:"http_method,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesRtcWebhooks struct {
	EventURL *CreateApplication201ApplicationJSONCapabilitiesRtcWebhooksEventURL `json:"event_url,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesRtc struct {
	Webhooks *CreateApplication201ApplicationJSONCapabilitiesRtcWebhooks `json:"webhooks,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL struct {
	Address           *string `json:"address,omitempty"`
	ConnectionTimeout *int64  `json:"connection_timeout,omitempty"`
	HTTPMethod        *string `json:"http_method,omitempty"`
	SocketTimeout     *int64  `json:"socket_timeout,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksEventURL struct {
	Address           *string `json:"address,omitempty"`
	ConnectionTimeout *int64  `json:"connection_timeout,omitempty"`
	HTTPMethod        *string `json:"http_method,omitempty"`
	SocketTimeout     *int64  `json:"socket_timeout,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL struct {
	Address           *string `json:"address,omitempty"`
	ConnectionTimeout *int64  `json:"connection_timeout,omitempty"`
	HTTPMethod        *string `json:"http_method,omitempty"`
	SocketTimeout     *int64  `json:"socket_timeout,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooks struct {
	AnswerURL         *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL         `json:"answer_url,omitempty"`
	EventURL          *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksEventURL          `json:"event_url,omitempty"`
	FallbackAnswerURL *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL `json:"fallback_answer_url,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilitiesVoice struct {
	Webhooks *CreateApplication201ApplicationJSONCapabilitiesVoiceWebhooks `json:"webhooks,omitempty"`
}

type CreateApplication201ApplicationJSONCapabilities struct {
	Messages *CreateApplication201ApplicationJSONCapabilitiesMessages `json:"messages,omitempty"`
	Rtc      *CreateApplication201ApplicationJSONCapabilitiesRtc      `json:"rtc,omitempty"`
	Vbc      map[string]interface{}                                   `json:"vbc,omitempty"`
	Voice    *CreateApplication201ApplicationJSONCapabilitiesVoice    `json:"voice,omitempty"`
}

type CreateApplication201ApplicationJSONKeys struct {
	PrivateKey *string `json:"private_key,omitempty"`
	PublicKey  *string `json:"public_key,omitempty"`
}

type CreateApplication201ApplicationJSONPrivacy struct {
	ImproveAi *bool `json:"improve_ai,omitempty"`
}

type CreateApplication201ApplicationJSON struct {
	Capabilities *CreateApplication201ApplicationJSONCapabilities `json:"capabilities,omitempty"`
	ID           *string                                          `json:"id,omitempty"`
	Keys         *CreateApplication201ApplicationJSONKeys         `json:"keys,omitempty"`
	Name         *string                                          `json:"name,omitempty"`
	Privacy      *CreateApplication201ApplicationJSONPrivacy      `json:"privacy,omitempty"`
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
