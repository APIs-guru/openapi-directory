package shared

// Indicator
// Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
type Indicator struct {
	Domains     []string           `json:"domains,omitempty"`
	IPAddresses []string           `json:"ipAddresses,omitempty"`
	Signatures  []ProcessSignature `json:"signatures,omitempty"`
	Uris        []string           `json:"uris,omitempty"`
}
