package shared

// PassThrough
// Strategy where only signature and field values are verified
type PassThrough struct {
	Type                 string               `json:"type"`
	VerificationSettings VerificationSettings `json:"verificationSettings"`
}
