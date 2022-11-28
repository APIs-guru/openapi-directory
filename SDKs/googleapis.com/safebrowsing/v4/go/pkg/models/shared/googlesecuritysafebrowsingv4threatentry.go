package shared

// GoogleSecuritySafebrowsingV4ThreatEntry
// An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
type GoogleSecuritySafebrowsingV4ThreatEntry struct {
	Digest *string `json:"digest,omitempty"`
	Hash   *string `json:"hash,omitempty"`
	URL    *string `json:"url,omitempty"`
}
