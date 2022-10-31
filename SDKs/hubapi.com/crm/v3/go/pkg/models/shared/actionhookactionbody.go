package shared




type ActionHookActionBodyHTTPMethodEnum string

const (
    ActionHookActionBodyHTTPMethodEnumConnect ActionHookActionBodyHTTPMethodEnum = "CONNECT"
ActionHookActionBodyHTTPMethodEnumDelete ActionHookActionBodyHTTPMethodEnum = "DELETE"
ActionHookActionBodyHTTPMethodEnumGet ActionHookActionBodyHTTPMethodEnum = "GET"
ActionHookActionBodyHTTPMethodEnumHead ActionHookActionBodyHTTPMethodEnum = "HEAD"
ActionHookActionBodyHTTPMethodEnumOptions ActionHookActionBodyHTTPMethodEnum = "OPTIONS"
ActionHookActionBodyHTTPMethodEnumPatch ActionHookActionBodyHTTPMethodEnum = "PATCH"
ActionHookActionBodyHTTPMethodEnumPost ActionHookActionBodyHTTPMethodEnum = "POST"
ActionHookActionBodyHTTPMethodEnumPut ActionHookActionBodyHTTPMethodEnum = "PUT"
ActionHookActionBodyHTTPMethodEnumTrace ActionHookActionBodyHTTPMethodEnum = "TRACE"
)



type ActionHookActionBodyTypeEnum string

const (
    ActionHookActionBodyTypeEnumActionHook ActionHookActionBodyTypeEnum = "ACTION_HOOK"
)


type ActionHookActionBody struct {
    Confirmation *ActionConfirmationBody `json:"confirmation,omitempty"`
    HTTPMethod ActionHookActionBodyHTTPMethodEnum `json:"httpMethod"`
    Label *string `json:"label,omitempty"`
    PropertyNamesIncluded []string `json:"propertyNamesIncluded"`
    Type ActionHookActionBodyTypeEnum `json:"type"`
    URL string `json:"url"`
    
}

