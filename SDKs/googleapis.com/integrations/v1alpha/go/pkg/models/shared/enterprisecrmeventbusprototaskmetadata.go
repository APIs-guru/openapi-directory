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
	ActiveTaskName              *string                                                                `json:"activeTaskName"`
	Admins                      []EnterpriseCrmEventbusProtoTaskMetadataAdmin                          `json:"admins"`
	Category                    *EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum                    `json:"category"`
	CodeSearchLink              *string                                                                `json:"codeSearchLink"`
	DefaultJSONValidationOption *EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum `json:"defaultJsonValidationOption"`
	DefaultSpec                 *string                                                                `json:"defaultSpec"`
	Description                 *string                                                                `json:"description"`
	DescriptiveName             *string                                                                `json:"descriptiveName"`
	DocMarkdown                 *string                                                                `json:"docMarkdown"`
	ExternalCategory            *EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum            `json:"externalCategory"`
	ExternalCategorySequence    *int32                                                                 `json:"externalCategorySequence"`
	ExternalDocHTML             *string                                                                `json:"externalDocHtml"`
	ExternalDocLink             *string                                                                `json:"externalDocLink"`
	ExternalDocMarkdown         *string                                                                `json:"externalDocMarkdown"`
	G3DocLink                   *string                                                                `json:"g3DocLink"`
	IconLink                    *string                                                                `json:"iconLink"`
	IsDeprecated                *bool                                                                  `json:"isDeprecated"`
	Name                        *string                                                                `json:"name"`
	StandaloneExternalDocHTML   *string                                                                `json:"standaloneExternalDocHtml"`
	Status                      *EnterpriseCrmEventbusProtoTaskMetadataStatusEnum                      `json:"status"`
	System                      *EnterpriseCrmEventbusProtoTaskMetadataSystemEnum                      `json:"system"`
	Tags                        []string                                                               `json:"tags"`
}
