package shared




type EntryPointEntryPointTypeEnum string

const (
    EntryPointEntryPointTypeEnumEntryPointTypeUnspecified EntryPointEntryPointTypeEnum = "ENTRY_POINT_TYPE_UNSPECIFIED"
EntryPointEntryPointTypeEnumWebApp EntryPointEntryPointTypeEnum = "WEB_APP"
EntryPointEntryPointTypeEnumExecutionAPI EntryPointEntryPointTypeEnum = "EXECUTION_API"
EntryPointEntryPointTypeEnumAddOn EntryPointEntryPointTypeEnum = "ADD_ON"
)


type EntryPoint struct {
    AddOn *GoogleAppsScriptTypeAddOnEntryPoint `json:"addOn,omitempty"`
    EntryPointType *EntryPointEntryPointTypeEnum `json:"entryPointType,omitempty"`
    ExecutionAPI *GoogleAppsScriptTypeExecutionAPIEntryPoint `json:"executionApi,omitempty"`
    WebApp *GoogleAppsScriptTypeWebAppEntryPoint `json:"webApp,omitempty"`
    
}

