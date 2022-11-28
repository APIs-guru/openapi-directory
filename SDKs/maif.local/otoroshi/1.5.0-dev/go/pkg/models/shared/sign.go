package shared

// Sign
// Strategy where signature and field values are verified, and then token si re-signed
type Sign struct {
	AlgoSettings         interface{}          `json:"algoSettings"`
	Type                 string               `json:"type"`
	VerificationSettings VerificationSettings `json:"verificationSettings"`
}
