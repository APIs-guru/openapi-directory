package shared

// Transform
// Strategy where signature and field values are verified, trasnformed and then token si re-signed
type Transform struct {
	AlgoSettings         interface{}          `json:"algoSettings"`
	TransformSettings    *TransformSettings   `json:"transformSettings,omitempty"`
	Type                 string               `json:"type"`
	VerificationSettings VerificationSettings `json:"verificationSettings"`
}
