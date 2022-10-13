package shared

type DirectPlayProfile struct {
	AudioCodec *string              `json:"AudioCodec"`
	Container  *string              `json:"Container"`
	Type       *DlnaProfileTypeEnum `json:"Type"`
	VideoCodec *string              `json:"VideoCodec"`
}
