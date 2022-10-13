package shared

type GoogleSecuritySafebrowsingV4ThreatEntry struct {
	Digest *string `json:"digest"`
	Hash   *string `json:"hash"`
	URL    *string `json:"url"`
}
