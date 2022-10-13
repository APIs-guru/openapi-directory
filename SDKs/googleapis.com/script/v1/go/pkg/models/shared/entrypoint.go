package shared

type EntryPointEntryPointTypeEnum string

const (
	EntryPointEntryPointTypeEnumEntryPointTypeUnspecified EntryPointEntryPointTypeEnum = "ENTRY_POINT_TYPE_UNSPECIFIED"
	EntryPointEntryPointTypeEnumWebApp                    EntryPointEntryPointTypeEnum = "WEB_APP"
	EntryPointEntryPointTypeEnumExecutionAPI              EntryPointEntryPointTypeEnum = "EXECUTION_API"
	EntryPointEntryPointTypeEnumAddOn                     EntryPointEntryPointTypeEnum = "ADD_ON"
)

type EntryPoint struct {
	AddOn          *GoogleAppsScriptTypeAddOnEntryPoint        `json:"addOn"`
	EntryPointType *EntryPointEntryPointTypeEnum               `json:"entryPointType"`
	ExecutionAPI   *GoogleAppsScriptTypeExecutionAPIEntryPoint `json:"executionApi"`
	WebApp         *GoogleAppsScriptTypeWebAppEntryPoint       `json:"webApp"`
}
