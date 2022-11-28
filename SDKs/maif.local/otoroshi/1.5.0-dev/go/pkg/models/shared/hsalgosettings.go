package shared

// HsAlgoSettings
// Settings for an HMAC + SHA signing algorithm
type HsAlgoSettings struct {
	Secret string `json:"secret"`
	Size   int32  `json:"size"`
	Type   string `json:"type"`
}
