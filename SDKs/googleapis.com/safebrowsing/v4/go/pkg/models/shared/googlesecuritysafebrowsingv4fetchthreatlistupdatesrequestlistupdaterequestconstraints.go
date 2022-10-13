package shared

type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum string

const (
	GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumCompressionTypeUnspecified GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum = "COMPRESSION_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumRaw                        GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum = "RAW"
	GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumRice                       GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum = "RICE"
)

type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints struct {
	DeviceLocation        *string                                                                                                          `json:"deviceLocation"`
	Language              *string                                                                                                          `json:"language"`
	MaxDatabaseEntries    *int32                                                                                                           `json:"maxDatabaseEntries"`
	MaxUpdateEntries      *int32                                                                                                           `json:"maxUpdateEntries"`
	Region                *string                                                                                                          `json:"region"`
	SupportedCompressions []GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum `json:"supportedCompressions"`
}
