package shared

// ChannelFrom1
// Connect to an App User
type ChannelFrom1 struct {
	Type string `json:"type"`
	User string `json:"user"`
}

// ChannelFrom2
// Connect to a Phone (PSTN) number
type ChannelFrom2 struct {
	Number string `json:"number"`
	Type   string `json:"type"`
}

// ChannelFrom3
// Connect to a SIP Endpoint
type ChannelFrom3 struct {
	Type string  `json:"type"`
	URI  *string `json:"uri,omitempty"`
}

type ChannelFrom4ContentTypeEnum string

const (
	ChannelFrom4ContentTypeEnumAudioL16RateEqual8000  ChannelFrom4ContentTypeEnum = "audio/l16;rate=8000"
	ChannelFrom4ContentTypeEnumAudioL16RateEqual16000 ChannelFrom4ContentTypeEnum = "audio/l16;rate=16000"
)

// ChannelFrom4Headers
// Details of the Websocket you want to connect to
type ChannelFrom4Headers struct {
	CustomerID *string `json:"customer_id,omitempty"`
}

// ChannelFrom4
// Connect to a Websocket
type ChannelFrom4 struct {
	ContentType ChannelFrom4ContentTypeEnum `json:"content-type"`
	Headers     *ChannelFrom4Headers        `json:"headers,omitempty"`
	Type        string                      `json:"type"`
	URI         *string                     `json:"uri,omitempty"`
}

// ChannelFrom5
// Connect to a VBC extension
type ChannelFrom5 struct {
	Extension string `json:"extension"`
	Type      string `json:"type"`
}

// ChannelTo2
// Connect to a Phone (PSTN) number
type ChannelTo2 struct {
	DtmfAnswer *string `json:"dtmfAnswer,omitempty"`
	Number     string  `json:"number"`
	Type       string  `json:"type"`
}

// Channel
// A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
type Channel struct {
	From   *interface{}     `json:"from,omitempty"`
	LegID  *string          `json:"leg_id,omitempty"`
	LegIds []interface{}    `json:"leg_ids,omitempty"`
	To     *interface{}     `json:"to,omitempty"`
	Type   *ChannelTypeEnum `json:"type,omitempty"`
}
