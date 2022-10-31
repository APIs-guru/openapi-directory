package shared




type WindowsUpdateSettingsClassificationsEnum string

const (
    WindowsUpdateSettingsClassificationsEnumClassificationUnspecified WindowsUpdateSettingsClassificationsEnum = "CLASSIFICATION_UNSPECIFIED"
WindowsUpdateSettingsClassificationsEnumCritical WindowsUpdateSettingsClassificationsEnum = "CRITICAL"
WindowsUpdateSettingsClassificationsEnumSecurity WindowsUpdateSettingsClassificationsEnum = "SECURITY"
WindowsUpdateSettingsClassificationsEnumDefinition WindowsUpdateSettingsClassificationsEnum = "DEFINITION"
WindowsUpdateSettingsClassificationsEnumDriver WindowsUpdateSettingsClassificationsEnum = "DRIVER"
WindowsUpdateSettingsClassificationsEnumFeaturePack WindowsUpdateSettingsClassificationsEnum = "FEATURE_PACK"
WindowsUpdateSettingsClassificationsEnumServicePack WindowsUpdateSettingsClassificationsEnum = "SERVICE_PACK"
WindowsUpdateSettingsClassificationsEnumTool WindowsUpdateSettingsClassificationsEnum = "TOOL"
WindowsUpdateSettingsClassificationsEnumUpdateRollup WindowsUpdateSettingsClassificationsEnum = "UPDATE_ROLLUP"
WindowsUpdateSettingsClassificationsEnumUpdate WindowsUpdateSettingsClassificationsEnum = "UPDATE"
)


type WindowsUpdateSettings struct {
    Classifications []WindowsUpdateSettingsClassificationsEnum `json:"classifications,omitempty"`
    Excludes []string `json:"excludes,omitempty"`
    ExclusivePatches []string `json:"exclusivePatches,omitempty"`
    
}

