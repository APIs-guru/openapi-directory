package shared

// GoogleSecuritySafebrowsingV4ThreatEntryMetadata
// The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
type GoogleSecuritySafebrowsingV4ThreatEntryMetadata struct {
	Entries []GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry `json:"entries,omitempty"`
}
