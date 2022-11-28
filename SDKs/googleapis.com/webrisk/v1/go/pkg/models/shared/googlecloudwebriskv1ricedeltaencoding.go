package shared

// GoogleCloudWebriskV1RiceDeltaEncoding
// The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
type GoogleCloudWebriskV1RiceDeltaEncoding struct {
	EncodedData   *string `json:"encodedData,omitempty"`
	EntryCount    *int32  `json:"entryCount,omitempty"`
	FirstValue    *string `json:"firstValue,omitempty"`
	RiceParameter *int32  `json:"riceParameter,omitempty"`
}
