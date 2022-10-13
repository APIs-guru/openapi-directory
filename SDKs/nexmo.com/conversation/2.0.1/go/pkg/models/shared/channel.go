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
	URI  *string `json:"uri"`
}

type ChannelFrom4ContentTypeEnum string

const (
	ChannelFrom4ContentTypeEnumAudioL16RateEqual8000  ChannelFrom4ContentTypeEnum = "audio/l16;rate=8000"
	ChannelFrom4ContentTypeEnumAudioL16RateEqual16000 ChannelFrom4ContentTypeEnum = "audio/l16;rate=16000"
)

type ChannelFrom4Headers struct {
	CustomerID *string `json:"customer_id"`
}

type ChannelFrom4 struct {
	ContentType ChannelFrom4ContentTypeEnum `json:"content-type"`
	Headers     *ChannelFrom4Headers        `json:"headers"`
	Type        string                      `json:"type"`
	URI         *string                     `json:"uri"`
}

type ChannelFrom5 struct {
	Extension string `json:"extension"`
	Type      string `json:"type"`
}

type ChannelTo2 struct {
	DtmfAnswer *string `json:"dtmfAnswer"`
	Number     string  `json:"number"`
	Type       string  `json:"type"`
}

type Channel struct {
	From   *interface{}     `json:"from"`
	LegID  *string          `json:"leg_id"`
	LegIds []interface{}    `json:"leg_ids"`
	To     *interface{}     `json:"to"`
	Type   *ChannelTypeEnum `json:"type"`
}
