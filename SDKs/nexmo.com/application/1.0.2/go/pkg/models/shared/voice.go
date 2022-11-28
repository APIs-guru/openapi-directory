package shared

type VoiceWebhooksEndpointTypeEnum string

const (
	VoiceWebhooksEndpointTypeEnumAnswerURL VoiceWebhooksEndpointTypeEnum = "answer_url"
	VoiceWebhooksEndpointTypeEnumEventURL  VoiceWebhooksEndpointTypeEnum = "event_url"
)

type VoiceWebhooksHTTPMethodEnum string

const (
	VoiceWebhooksHTTPMethodEnumGet  VoiceWebhooksHTTPMethodEnum = "GET"
	VoiceWebhooksHTTPMethodEnumPost VoiceWebhooksHTTPMethodEnum = "POST"
)

type VoiceWebhooks struct {
	Endpoint     string                        `json:"endpoint"`
	EndpointType VoiceWebhooksEndpointTypeEnum `json:"endpoint_type"`
	HTTPMethod   VoiceWebhooksHTTPMethodEnum   `json:"http_method"`
}

// Voice
// The Nexmo product that you access with this application.
type Voice struct {
	Webhooks []VoiceWebhooks `json:"webhooks,omitempty"`
}
