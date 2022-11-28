package shared

// UniversalTwoFactor
// Security key information specific to the U2F protocol.
type UniversalTwoFactor struct {
	AppID *string `json:"appId,omitempty"`
}
