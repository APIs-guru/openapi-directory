package shared

type GoogleCloudWebriskV1ThreatEntryAdditions struct {
	RawHashes  []GoogleCloudWebriskV1RawHashes        `json:"rawHashes"`
	RiceHashes *GoogleCloudWebriskV1RiceDeltaEncoding `json:"riceHashes"`
}
