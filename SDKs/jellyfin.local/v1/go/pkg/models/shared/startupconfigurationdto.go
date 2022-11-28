package shared

// StartupConfigurationDto
// The startup configuration DTO.
type StartupConfigurationDto struct {
	MetadataCountryCode       *string `json:"MetadataCountryCode,omitempty"`
	PreferredMetadataLanguage *string `json:"PreferredMetadataLanguage,omitempty"`
	UICulture                 *string `json:"UICulture,omitempty"`
}
