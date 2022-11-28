package shared

// Groups
// JSON response template for groups migration API.
type Groups struct {
	Kind         *string `json:"kind,omitempty"`
	ResponseCode *string `json:"responseCode,omitempty"`
}
