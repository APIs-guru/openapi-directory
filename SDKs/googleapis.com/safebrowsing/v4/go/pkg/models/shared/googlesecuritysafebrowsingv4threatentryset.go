package shared




type GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum string

const (
    GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnumCompressionTypeUnspecified GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = "COMPRESSION_TYPE_UNSPECIFIED"
GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnumRaw GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = "RAW"
GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnumRice GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum = "RICE"
)


type GoogleSecuritySafebrowsingV4ThreatEntrySet struct {
    CompressionType *GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum `json:"compressionType,omitempty"`
    RawHashes *GoogleSecuritySafebrowsingV4RawHashes `json:"rawHashes,omitempty"`
    RawIndices *GoogleSecuritySafebrowsingV4RawIndices `json:"rawIndices,omitempty"`
    RiceHashes *GoogleSecuritySafebrowsingV4RiceDeltaEncoding `json:"riceHashes,omitempty"`
    RiceIndices *GoogleSecuritySafebrowsingV4RiceDeltaEncoding `json:"riceIndices,omitempty"`
    
}

