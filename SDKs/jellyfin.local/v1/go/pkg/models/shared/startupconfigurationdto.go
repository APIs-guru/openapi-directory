package shared

type StartupConfigurationDto struct {
	MetadataCountryCode       *string `json:"MetadataCountryCode"`
	PreferredMetadataLanguage *string `json:"PreferredMetadataLanguage"`
	UICulture                 *string `json:"UICulture"`
}
