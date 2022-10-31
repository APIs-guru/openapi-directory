package shared



type InfoTypeTransformation struct {
    CharacterMaskConfig *CharacterMaskConfig `json:"characterMaskConfig,omitempty"`
    CryptoHashConfig *CryptoHashConfig `json:"cryptoHashConfig,omitempty"`
    DateShiftConfig *DateShiftConfig `json:"dateShiftConfig,omitempty"`
    InfoTypes []string `json:"infoTypes,omitempty"`
    RedactConfig map[string]interface{} `json:"redactConfig,omitempty"`
    ReplaceWithInfoTypeConfig map[string]interface{} `json:"replaceWithInfoTypeConfig,omitempty"`
    
}

