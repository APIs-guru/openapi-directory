package shared

type GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum string

const (
	GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnumUnknownAddonType GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum = "UNKNOWN_ADDON_TYPE"
	GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnumGmail            GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum = "GMAIL"
	GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnumDataStudio       GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum = "DATA_STUDIO"
)

// GoogleAppsScriptTypeAddOnEntryPoint
// An add-on entry point.
type GoogleAppsScriptTypeAddOnEntryPoint struct {
	AddOnType         *GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum `json:"addOnType,omitempty"`
	Description       *string                                           `json:"description,omitempty"`
	HelpURL           *string                                           `json:"helpUrl,omitempty"`
	PostInstallTipURL *string                                           `json:"postInstallTipUrl,omitempty"`
	ReportIssueURL    *string                                           `json:"reportIssueUrl,omitempty"`
	Title             *string                                           `json:"title,omitempty"`
}
