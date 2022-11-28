package shared

type ThreeContentTypeEnum string

const (
	ThreeContentTypeEnumAudioL16RateEqual8000  ThreeContentTypeEnum = "audio/l16;rate=8000"
	ThreeContentTypeEnumAudioL16RateEqual16000 ThreeContentTypeEnum = "audio/l16;rate=16000"
)

// ThreeHeaders
// Details of the Websocket you want to connect to
type ThreeHeaders struct {
	CustomerID *string `json:"customer_id,omitempty"`
}

// Three
// Connect to a Websocket
type Three struct {
	ContentType ThreeContentTypeEnum `json:"content-type"`
	Headers     *ThreeHeaders        `json:"headers,omitempty"`
	Type        string               `json:"type"`
	URI         *string              `json:"uri,omitempty"`
}
