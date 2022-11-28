package shared

// GoogleCloudWebriskV1ThreatEntryRemovals
// Contains the set of entries to remove from a local database.
type GoogleCloudWebriskV1ThreatEntryRemovals struct {
	RawIndices  *GoogleCloudWebriskV1RawIndices        `json:"rawIndices,omitempty"`
	RiceIndices *GoogleCloudWebriskV1RiceDeltaEncoding `json:"riceIndices,omitempty"`
}
