package shared

// GoogleCloudWebriskV1ThreatEntryAdditions
// Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
type GoogleCloudWebriskV1ThreatEntryAdditions struct {
	RawHashes  []GoogleCloudWebriskV1RawHashes        `json:"rawHashes,omitempty"`
	RiceHashes *GoogleCloudWebriskV1RiceDeltaEncoding `json:"riceHashes,omitempty"`
}
