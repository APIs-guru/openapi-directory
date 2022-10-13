package shared

type GoogleSecuritySafebrowsingV4RiceDeltaEncoding struct {
	EncodedData   *string `json:"encodedData"`
	FirstValue    *string `json:"firstValue"`
	NumEntries    *int32  `json:"numEntries"`
	RiceParameter *int32  `json:"riceParameter"`
}
