package shared

type ConfigVariableTemplateStateEnum string

const (
	ConfigVariableTemplateStateEnumStateUnspecified ConfigVariableTemplateStateEnum = "STATE_UNSPECIFIED"
	ConfigVariableTemplateStateEnumActive           ConfigVariableTemplateStateEnum = "ACTIVE"
	ConfigVariableTemplateStateEnumDeprecated       ConfigVariableTemplateStateEnum = "DEPRECATED"
)

type ConfigVariableTemplateValueTypeEnum string

const (
	ConfigVariableTemplateValueTypeEnumValueTypeUnspecified ConfigVariableTemplateValueTypeEnum = "VALUE_TYPE_UNSPECIFIED"
	ConfigVariableTemplateValueTypeEnumString               ConfigVariableTemplateValueTypeEnum = "STRING"
	ConfigVariableTemplateValueTypeEnumInt                  ConfigVariableTemplateValueTypeEnum = "INT"
	ConfigVariableTemplateValueTypeEnumBool                 ConfigVariableTemplateValueTypeEnum = "BOOL"
	ConfigVariableTemplateValueTypeEnumSecret               ConfigVariableTemplateValueTypeEnum = "SECRET"
	ConfigVariableTemplateValueTypeEnumEnum                 ConfigVariableTemplateValueTypeEnum = "ENUM"
	ConfigVariableTemplateValueTypeEnumAuthorizationCode    ConfigVariableTemplateValueTypeEnum = "AUTHORIZATION_CODE"
)

type ConfigVariableTemplate struct {
	AuthorizationCodeLink *AuthorizationCodeLink               `json:"authorizationCodeLink"`
	Description           *string                              `json:"description"`
	DisplayName           *string                              `json:"displayName"`
	EnumOptions           []EnumOption                         `json:"enumOptions"`
	Key                   *string                              `json:"key"`
	Required              *bool                                `json:"required"`
	RoleGrant             *RoleGrant                           `json:"roleGrant"`
	State                 *ConfigVariableTemplateStateEnum     `json:"state"`
	ValidationRegex       *string                              `json:"validationRegex"`
	ValueType             *ConfigVariableTemplateValueTypeEnum `json:"valueType"`
}
