package shared

type MetadataRefreshModeEnum string

const (
	MetadataRefreshModeEnumNone           MetadataRefreshModeEnum = "None"
	MetadataRefreshModeEnumValidationOnly MetadataRefreshModeEnum = "ValidationOnly"
	MetadataRefreshModeEnumDefault        MetadataRefreshModeEnum = "Default"
	MetadataRefreshModeEnumFullRefresh    MetadataRefreshModeEnum = "FullRefresh"
)
