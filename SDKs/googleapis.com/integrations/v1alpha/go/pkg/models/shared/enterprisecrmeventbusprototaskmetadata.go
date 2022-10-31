package shared

type EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum string

const (
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumUnspecifiedCategory EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "UNSPECIFIED_CATEGORY"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumCustom              EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "CUSTOM"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumFlowControl         EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "FLOW_CONTROL"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumDataManipulation    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "DATA_MANIPULATION"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumScripting           EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "SCRIPTING"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumConnector           EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "CONNECTOR"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumHidden              EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "HIDDEN"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumCloudSystems        EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "CLOUD_SYSTEMS"
	EnterpriseCrmEventbusProtoTaskMetadataCategoryEnumCustomTaskTemplate  EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = "CUSTOM_TASK_TEMPLATE"
)

type EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum string

const (
	EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumUnspecifiedJSONValidationOption EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum = "UNSPECIFIED_JSON_VALIDATION_OPTION"
	EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumSkip                            EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum = "SKIP"
	EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumPreExecution                    EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum = "PRE_EXECUTION"
	EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumPostExecution                   EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum = "POST_EXECUTION"
	EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnumPrePostExecution                EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum = "PRE_POST_EXECUTION"
)

type EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum string

const (
	EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnumUnspecifiedExternalCategory EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum = "UNSPECIFIED_EXTERNAL_CATEGORY"
	EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnumCore                        EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum = "CORE"
	EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnumConnectors                  EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum = "CONNECTORS"
)

type EnterpriseCrmEventbusProtoTaskMetadataStatusEnum string

const (
	EnterpriseCrmEventbusProtoTaskMetadataStatusEnumUnspecifiedStatus EnterpriseCrmEventbusProtoTaskMetadataStatusEnum = "UNSPECIFIED_STATUS"
	EnterpriseCrmEventbusProtoTaskMetadataStatusEnumDefaultInactive   EnterpriseCrmEventbusProtoTaskMetadataStatusEnum = "DEFAULT_INACTIVE"
	EnterpriseCrmEventbusProtoTaskMetadataStatusEnumActive            EnterpriseCrmEventbusProtoTaskMetadataStatusEnum = "ACTIVE"
)

type EnterpriseCrmEventbusProtoTaskMetadataSystemEnum string

const (
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumUnspecifiedSystem EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "UNSPECIFIED_SYSTEM"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumGeneric           EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "GENERIC"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumBuganizer         EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "BUGANIZER"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumSalesforce        EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "SALESFORCE"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumCloudSQL          EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "CLOUD_SQL"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumPlx               EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "PLX"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumSheets            EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "SHEETS"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumGoogleGroups      EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "GOOGLE_GROUPS"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumEmail             EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "EMAIL"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumSpanner           EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "SPANNER"
	EnterpriseCrmEventbusProtoTaskMetadataSystemEnumDataBridge        EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = "DATA_BRIDGE"
)

type EnterpriseCrmEventbusProtoTaskMetadata struct {
	ActiveTaskName              *string                                                                `json:"activeTaskName,omitempty"`
	Admins                      []EnterpriseCrmEventbusProtoTaskMetadataAdmin                          `json:"admins,omitempty"`
	Category                    *EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum                    `json:"category,omitempty"`
	CodeSearchLink              *string                                                                `json:"codeSearchLink,omitempty"`
	DefaultJSONValidationOption *EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum `json:"defaultJsonValidationOption,omitempty"`
	DefaultSpec                 *string                                                                `json:"defaultSpec,omitempty"`
	Description                 *string                                                                `json:"description,omitempty"`
	DescriptiveName             *string                                                                `json:"descriptiveName,omitempty"`
	DocMarkdown                 *string                                                                `json:"docMarkdown,omitempty"`
	ExternalCategory            *EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum            `json:"externalCategory,omitempty"`
	ExternalCategorySequence    *int32                                                                 `json:"externalCategorySequence,omitempty"`
	ExternalDocHTML             *string                                                                `json:"externalDocHtml,omitempty"`
	ExternalDocLink             *string                                                                `json:"externalDocLink,omitempty"`
	ExternalDocMarkdown         *string                                                                `json:"externalDocMarkdown,omitempty"`
	G3DocLink                   *string                                                                `json:"g3DocLink,omitempty"`
	IconLink                    *string                                                                `json:"iconLink,omitempty"`
	IsDeprecated                *bool                                                                  `json:"isDeprecated,omitempty"`
	Name                        *string                                                                `json:"name,omitempty"`
	StandaloneExternalDocHTML   *string                                                                `json:"standaloneExternalDocHtml,omitempty"`
	Status                      *EnterpriseCrmEventbusProtoTaskMetadataStatusEnum                      `json:"status,omitempty"`
	System                      *EnterpriseCrmEventbusProtoTaskMetadataSystemEnum                      `json:"system,omitempty"`
	Tags                        []string                                                               `json:"tags,omitempty"`
}
