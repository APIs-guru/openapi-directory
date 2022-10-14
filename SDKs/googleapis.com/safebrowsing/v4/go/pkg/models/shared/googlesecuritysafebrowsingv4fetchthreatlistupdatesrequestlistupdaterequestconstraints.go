package shared

type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum string

const (
	GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumCompressionTypeUnspecified GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum = "COMPRESSION_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumRaw                        GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum = "RAW"
	GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumRice                       GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum = "RICE"
)

type GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints struct {
	DeviceLocation        *string                                                                                                          `json:"deviceLocation,omitempty"`
	Language              *string                                                                                                          `json:"language,omitempty"`
	MaxDatabaseEntries    *int32                                                                                                           `json:"maxDatabaseEntries,omitempty"`
	MaxUpdateEntries      *int32                                                                                                           `json:"maxUpdateEntries,omitempty"`
	Region                *string                                                                                                          `json:"region,omitempty"`
	SupportedCompressions []GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum `json:"supportedCompressions,omitempty"`
}
