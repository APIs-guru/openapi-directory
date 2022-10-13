package shared

type GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum string

const (
	GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnumUnknownAddonType GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum = "UNKNOWN_ADDON_TYPE"
	GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnumGmail            GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum = "GMAIL"
	GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnumDataStudio       GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum = "DATA_STUDIO"
)

type GoogleAppsScriptTypeAddOnEntryPoint struct {
	AddOnType         *GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum `json:"addOnType"`
	Description       *string                                           `json:"description"`
	HelpURL           *string                                           `json:"helpUrl"`
	PostInstallTipURL *string                                           `json:"postInstallTipUrl"`
	ReportIssueURL    *string                                           `json:"reportIssueUrl"`
	Title             *string                                           `json:"title"`
}
