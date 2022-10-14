package operations

type CreateNetworkWebhooksWebhookTestPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkWebhooksWebhookTestRequestBody struct {
	SharedSecret *string `json:"sharedSecret,omitempty"`
	URL          string  `json:"url"`
}

type CreateNetworkWebhooksWebhookTestRequest struct {
	PathParams CreateNetworkWebhooksWebhookTestPathParams
	Request    CreateNetworkWebhooksWebhookTestRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkWebhooksWebhookTestResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	CreateNetworkWebhooksWebhookTest201ApplicationJSONObject map[string]interface{}
}
