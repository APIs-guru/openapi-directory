package shared

// VulnerableHeaders
// Information about vulnerable or missing HTTP Headers.
type VulnerableHeaders struct {
	Headers        []Header `json:"headers,omitempty"`
	MissingHeaders []Header `json:"missingHeaders,omitempty"`
}
