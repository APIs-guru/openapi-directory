package shared

type Transform struct {
	AlgoSettings         interface{}          `json:"algoSettings"`
	TransformSettings    *TransformSettings   `json:"transformSettings"`
	Type                 string               `json:"type"`
	VerificationSettings VerificationSettings `json:"verificationSettings"`
}
