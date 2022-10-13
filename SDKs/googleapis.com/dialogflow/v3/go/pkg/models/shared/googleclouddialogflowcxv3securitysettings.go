package shared

type GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum string

const (
	GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnumPurgeDataTypeUnspecified GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum = "PURGE_DATA_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnumDialogflowHistory        GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum = "DIALOGFLOW_HISTORY"
)

type GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum string

const (
	GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnumRedactionScopeUnspecified GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum = "REDACTION_SCOPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnumRedactDiskStorage         GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum = "REDACT_DISK_STORAGE"
)

type GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum string

const (
	GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnumRedactionStrategyUnspecified GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum = "REDACTION_STRATEGY_UNSPECIFIED"
	GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnumRedactWithService            GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum = "REDACT_WITH_SERVICE"
)

type GoogleCloudDialogflowCxV3SecuritySettings struct {
	AudioExportSettings    *GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings    `json:"audioExportSettings"`
	DeidentifyTemplate     *string                                                          `json:"deidentifyTemplate"`
	DisplayName            *string                                                          `json:"displayName"`
	InsightsExportSettings *GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings `json:"insightsExportSettings"`
	InspectTemplate        *string                                                          `json:"inspectTemplate"`
	Name                   *string                                                          `json:"name"`
	PurgeDataTypes         []GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum    `json:"purgeDataTypes"`
	RedactionScope         *GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum     `json:"redactionScope"`
	RedactionStrategy      *GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum  `json:"redactionStrategy"`
	RetentionWindowDays    *int32                                                           `json:"retentionWindowDays"`
}
