package shared

type EndpointWebsocketContentTypeEnum string

const (
	EndpointWebsocketContentTypeEnumAudioL16RateEqual8000  EndpointWebsocketContentTypeEnum = "audio/l16;rate=8000"
	EndpointWebsocketContentTypeEnumAudioL16RateEqual16000 EndpointWebsocketContentTypeEnum = "audio/l16;rate=16000"
)

type EndpointWebsocketHeaders struct {
	CustomerID *string `json:"customer_id,omitempty"`
}

type EndpointWebsocket struct {
	ContentType EndpointWebsocketContentTypeEnum `json:"content-type"`
	Headers     *EndpointWebsocketHeaders        `json:"headers,omitempty"`
	Type        string                           `json:"type"`
	URI         *string                          `json:"uri,omitempty"`
}
