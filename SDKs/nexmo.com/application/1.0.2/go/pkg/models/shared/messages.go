package shared

type MessagesWebhooksEndpointTypeEnum string

const (
	MessagesWebhooksEndpointTypeEnumInboundURL MessagesWebhooksEndpointTypeEnum = "inbound_url"
	MessagesWebhooksEndpointTypeEnumStatusURL  MessagesWebhooksEndpointTypeEnum = "status_url"
)

type MessagesWebhooksHTTPMethodEnum string

const (
	MessagesWebhooksHTTPMethodEnumGet  MessagesWebhooksHTTPMethodEnum = "GET"
	MessagesWebhooksHTTPMethodEnumPost MessagesWebhooksHTTPMethodEnum = "POST"
)

type MessagesWebhooks struct {
	Endpoint     string                           `json:"endpoint"`
	EndpointType MessagesWebhooksEndpointTypeEnum `json:"endpoint_type"`
	HTTPMethod   MessagesWebhooksHTTPMethodEnum   `json:"http_method"`
}

type Messages struct {
	Webhooks []MessagesWebhooks `json:"webhooks,omitempty"`
}
