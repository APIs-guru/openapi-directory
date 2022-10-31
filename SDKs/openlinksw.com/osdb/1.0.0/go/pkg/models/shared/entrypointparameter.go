package shared




type EntryPointParameterTypeEnum string

const (
    EntryPointParameterTypeEnumQuery EntryPointParameterTypeEnum = "query"
EntryPointParameterTypeEnumHeader EntryPointParameterTypeEnum = "header"
EntryPointParameterTypeEnumURI EntryPointParameterTypeEnum = "uri"
EntryPointParameterTypeEnumPath EntryPointParameterTypeEnum = "path"
EntryPointParameterTypeEnumBody EntryPointParameterTypeEnum = "body"
)


type EntryPointParameter struct {
    Description string `json:"description"`
    DisplayName string `json:"display_name"`
    ParameterName string `json:"parameter_name"`
    PermittedValues []string `json:"permitted_values"`
    Required int32 `json:"required"`
    Type EntryPointParameterTypeEnum `json:"type"`
    
}

