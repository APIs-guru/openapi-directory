package shared

type AllowedSubjectAltNames struct {
	AllowCustomSans           *bool    `json:"allowCustomSans"`
	AllowGlobbingDNSWildcards *bool    `json:"allowGlobbingDnsWildcards"`
	AllowedDNSNames           []string `json:"allowedDnsNames"`
	AllowedEmailAddresses     []string `json:"allowedEmailAddresses"`
	AllowedIps                []string `json:"allowedIps"`
	AllowedUris               []string `json:"allowedUris"`
}
