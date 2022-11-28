package shared

type EndpointWebsocketContentTypeEnum string

const (
	EndpointWebsocketContentTypeEnumAudioL16RateEqual8000  EndpointWebsocketContentTypeEnum = "audio/l16;rate=8000"
	EndpointWebsocketContentTypeEnumAudioL16RateEqual16000 EndpointWebsocketContentTypeEnum = "audio/l16;rate=16000"
)

// EndpointWebsocketHeaders
// Details of the Websocket you want to connect to
type EndpointWebsocketHeaders struct {
	CustomerID *string `json:"customer_id,omitempty"`
}

// EndpointWebsocket
// Connect to a Websocket
type EndpointWebsocket struct {
	ContentType EndpointWebsocketContentTypeEnum `json:"content-type"`
	Headers     *EndpointWebsocketHeaders        `json:"headers,omitempty"`
	Type        string                           `json:"type"`
	URI         *string                          `json:"uri,omitempty"`
}
