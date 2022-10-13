package shared

type Indicator struct {
	Domains     []string           `json:"domains"`
	IPAddresses []string           `json:"ipAddresses"`
	Signatures  []ProcessSignature `json:"signatures"`
	Uris        []string           `json:"uris"`
}
