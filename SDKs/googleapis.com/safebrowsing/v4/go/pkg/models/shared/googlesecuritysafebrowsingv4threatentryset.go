package shared

type GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnumCompressionTypeUnspecified GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = "COMPRESSION_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnumRaw                        GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = "RAW"
	GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnumRice                       GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = "RICE"
)

type GoogleSecuritySafebrowsingV4ThreatEntrySet struct {
	CompressionType *GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum `json:"compressionType"`
	RawHashes       *GoogleSecuritySafebrowsingV4RawHashes                         `json:"rawHashes"`
	RawIndices      *GoogleSecuritySafebrowsingV4RawIndices                        `json:"rawIndices"`
	RiceHashes      *GoogleSecuritySafebrowsingV4RiceDeltaEncoding                 `json:"riceHashes"`
	RiceIndices     *GoogleSecuritySafebrowsingV4RiceDeltaEncoding                 `json:"riceIndices"`
}
