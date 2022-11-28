package shared

// GoogleSecuritySafebrowsingV4RiceDeltaEncoding
// The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
type GoogleSecuritySafebrowsingV4RiceDeltaEncoding struct {
	EncodedData   *string `json:"encodedData,omitempty"`
	FirstValue    *string `json:"firstValue,omitempty"`
	NumEntries    *int32  `json:"numEntries,omitempty"`
	RiceParameter *int32  `json:"riceParameter,omitempty"`
}
