package shared




type ValidationOptionsSchemaValidationEnum string

const (
    ValidationOptionsSchemaValidationEnumUnknown ValidationOptionsSchemaValidationEnum = "UNKNOWN"
ValidationOptionsSchemaValidationEnumIgnore ValidationOptionsSchemaValidationEnum = "IGNORE"
ValidationOptionsSchemaValidationEnumIgnoreWithWarnings ValidationOptionsSchemaValidationEnum = "IGNORE_WITH_WARNINGS"
ValidationOptionsSchemaValidationEnumFail ValidationOptionsSchemaValidationEnum = "FAIL"
)



type ValidationOptionsUndeclaredPropertiesEnum string

const (
    ValidationOptionsUndeclaredPropertiesEnumUnknown ValidationOptionsUndeclaredPropertiesEnum = "UNKNOWN"
ValidationOptionsUndeclaredPropertiesEnumInclude ValidationOptionsUndeclaredPropertiesEnum = "INCLUDE"
ValidationOptionsUndeclaredPropertiesEnumIgnore ValidationOptionsUndeclaredPropertiesEnum = "IGNORE"
ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings ValidationOptionsUndeclaredPropertiesEnum = "INCLUDE_WITH_WARNINGS"
ValidationOptionsUndeclaredPropertiesEnumIgnoreWithWarnings ValidationOptionsUndeclaredPropertiesEnum = "IGNORE_WITH_WARNINGS"
ValidationOptionsUndeclaredPropertiesEnumFail ValidationOptionsUndeclaredPropertiesEnum = "FAIL"
)


type ValidationOptions struct {
    SchemaValidation *ValidationOptionsSchemaValidationEnum `json:"schemaValidation,omitempty"`
    UndeclaredProperties *ValidationOptionsUndeclaredPropertiesEnum `json:"undeclaredProperties,omitempty"`
    
}

