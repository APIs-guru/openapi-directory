package shared

type GoogleSecuritySafebrowsingV4RiceDeltaEncoding struct {
	EncodedData   *string `json:"encodedData,omitempty"`
	FirstValue    *string `json:"firstValue,omitempty"`
	NumEntries    *int32  `json:"numEntries,omitempty"`
	RiceParameter *int32  `json:"riceParameter,omitempty"`
}
