package shared

type InfoTypeTransformation struct {
	CharacterMaskConfig       *CharacterMaskConfig   `json:"characterMaskConfig"`
	CryptoHashConfig          *CryptoHashConfig      `json:"cryptoHashConfig"`
	DateShiftConfig           *DateShiftConfig       `json:"dateShiftConfig"`
	InfoTypes                 []string               `json:"infoTypes"`
	RedactConfig              map[string]interface{} `json:"redactConfig"`
	ReplaceWithInfoTypeConfig map[string]interface{} `json:"replaceWithInfoTypeConfig"`
}
