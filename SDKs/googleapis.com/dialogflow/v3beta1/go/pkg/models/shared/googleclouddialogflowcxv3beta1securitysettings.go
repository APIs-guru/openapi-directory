package shared

type GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum string

const (
	GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnumPurgeDataTypeUnspecified GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum = "PURGE_DATA_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnumDialogflowHistory        GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum = "DIALOGFLOW_HISTORY"
)

type GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum string

const (
	GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnumRedactionScopeUnspecified GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum = "REDACTION_SCOPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnumRedactDiskStorage         GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum = "REDACT_DISK_STORAGE"
)

type GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum string

const (
	GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnumRedactionStrategyUnspecified GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum = "REDACTION_STRATEGY_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnumRedactWithService            GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum = "REDACT_WITH_SERVICE"
)

type GoogleCloudDialogflowCxV3beta1SecuritySettings struct {
	AudioExportSettings    *GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings    `json:"audioExportSettings,omitempty"`
	DeidentifyTemplate     *string                                                               `json:"deidentifyTemplate,omitempty"`
	DisplayName            *string                                                               `json:"displayName,omitempty"`
	InsightsExportSettings *GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings `json:"insightsExportSettings,omitempty"`
	InspectTemplate        *string                                                               `json:"inspectTemplate,omitempty"`
	Name                   *string                                                               `json:"name,omitempty"`
	PurgeDataTypes         []GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum    `json:"purgeDataTypes,omitempty"`
	RedactionScope         *GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum     `json:"redactionScope,omitempty"`
	RedactionStrategy      *GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum  `json:"redactionStrategy,omitempty"`
	RetentionWindowDays    *int32                                                                `json:"retentionWindowDays,omitempty"`
}
