package shared

type Sign struct {
	AlgoSettings         interface{}          `json:"algoSettings"`
	Type                 string               `json:"type"`
	VerificationSettings VerificationSettings `json:"verificationSettings"`
}
