package shared




type ConfigVariableTemplateStateEnum string

const (
    ConfigVariableTemplateStateEnumStateUnspecified ConfigVariableTemplateStateEnum = "STATE_UNSPECIFIED"
ConfigVariableTemplateStateEnumActive ConfigVariableTemplateStateEnum = "ACTIVE"
ConfigVariableTemplateStateEnumDeprecated ConfigVariableTemplateStateEnum = "DEPRECATED"
)



type ConfigVariableTemplateValueTypeEnum string

const (
    ConfigVariableTemplateValueTypeEnumValueTypeUnspecified ConfigVariableTemplateValueTypeEnum = "VALUE_TYPE_UNSPECIFIED"
ConfigVariableTemplateValueTypeEnumString ConfigVariableTemplateValueTypeEnum = "STRING"
ConfigVariableTemplateValueTypeEnumInt ConfigVariableTemplateValueTypeEnum = "INT"
ConfigVariableTemplateValueTypeEnumBool ConfigVariableTemplateValueTypeEnum = "BOOL"
ConfigVariableTemplateValueTypeEnumSecret ConfigVariableTemplateValueTypeEnum = "SECRET"
ConfigVariableTemplateValueTypeEnumEnum ConfigVariableTemplateValueTypeEnum = "ENUM"
ConfigVariableTemplateValueTypeEnumAuthorizationCode ConfigVariableTemplateValueTypeEnum = "AUTHORIZATION_CODE"
)


type ConfigVariableTemplate struct {
    AuthorizationCodeLink *AuthorizationCodeLink `json:"authorizationCodeLink,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EnumOptions []EnumOption `json:"enumOptions,omitempty"`
    Key *string `json:"key,omitempty"`
    Required *bool `json:"required,omitempty"`
    RoleGrant *RoleGrant `json:"roleGrant,omitempty"`
    State *ConfigVariableTemplateStateEnum `json:"state,omitempty"`
    ValidationRegex *string `json:"validationRegex,omitempty"`
    ValueType *ConfigVariableTemplateValueTypeEnum `json:"valueType,omitempty"`
    
}

