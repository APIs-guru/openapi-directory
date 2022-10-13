package shared

type ResponseProfile struct {
	AudioCodec *string              `json:"AudioCodec"`
	Conditions []ProfileCondition   `json:"Conditions"`
	Container  *string              `json:"Container"`
	MimeType   *string              `json:"MimeType"`
	OrgPn      *string              `json:"OrgPn"`
	Type       *DlnaProfileTypeEnum `json:"Type"`
	VideoCodec *string              `json:"VideoCodec"`
}
