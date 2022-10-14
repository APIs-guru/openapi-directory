package shared

type ChannelFrom1 struct {
	Type string `json:"type"`
	User string `json:"user"`
}

type ChannelFrom2 struct {
	Number string `json:"number"`
	Type   string `json:"type"`
}

type ChannelFrom3 struct {
	Type string  `json:"type"`
	URI  *string `json:"uri,omitempty"`
}

type ChannelFrom4ContentTypeEnum string

const (
	ChannelFrom4ContentTypeEnumAudioL16RateEqual8000  ChannelFrom4ContentTypeEnum = "audio/l16;rate=8000"
	ChannelFrom4ContentTypeEnumAudioL16RateEqual16000 ChannelFrom4ContentTypeEnum = "audio/l16;rate=16000"
)

type ChannelFrom4Headers struct {
	CustomerID *string `json:"customer_id,omitempty"`
}

type ChannelFrom4 struct {
	ContentType ChannelFrom4ContentTypeEnum `json:"content-type"`
	Headers     *ChannelFrom4Headers        `json:"headers,omitempty"`
	Type        string                      `json:"type"`
	URI         *string                     `json:"uri,omitempty"`
}

type ChannelFrom5 struct {
	Extension string `json:"extension"`
	Type      string `json:"type"`
}

type ChannelTo2 struct {
	DtmfAnswer *string `json:"dtmfAnswer,omitempty"`
	Number     string  `json:"number"`
	Type       string  `json:"type"`
}

type Channel struct {
	From   *interface{}     `json:"from,omitempty"`
	LegID  *string          `json:"leg_id,omitempty"`
	LegIds []interface{}    `json:"leg_ids,omitempty"`
	To     *interface{}     `json:"to,omitempty"`
	Type   *ChannelTypeEnum `json:"type,omitempty"`
}
