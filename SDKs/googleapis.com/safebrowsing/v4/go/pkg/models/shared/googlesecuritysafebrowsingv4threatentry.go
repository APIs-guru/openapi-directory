package shared

type GoogleSecuritySafebrowsingV4ThreatEntry struct {
	Digest *string `json:"digest,omitempty"`
	Hash   *string `json:"hash,omitempty"`
	URL    *string `json:"url,omitempty"`
}
