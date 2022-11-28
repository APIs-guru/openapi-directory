import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskMetadataAdmin } from "./enterprisecrmeventbusprototaskmetadataadmin";
export declare enum EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum {
    UnspecifiedCategory = "UNSPECIFIED_CATEGORY",
    Custom = "CUSTOM",
    FlowControl = "FLOW_CONTROL",
    DataManipulation = "DATA_MANIPULATION",
    Scripting = "SCRIPTING",
    Connector = "CONNECTOR",
    Hidden = "HIDDEN",
    CloudSystems = "CLOUD_SYSTEMS",
    CustomTaskTemplate = "CUSTOM_TASK_TEMPLATE"
}
export declare enum EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}
export declare enum EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum {
    UnspecifiedExternalCategory = "UNSPECIFIED_EXTERNAL_CATEGORY",
    Core = "CORE",
    Connectors = "CONNECTORS"
}
export declare enum EnterpriseCrmEventbusProtoTaskMetadataStatusEnum {
    UnspecifiedStatus = "UNSPECIFIED_STATUS",
    DefaultInactive = "DEFAULT_INACTIVE",
    Active = "ACTIVE"
}
export declare enum EnterpriseCrmEventbusProtoTaskMetadataSystemEnum {
    UnspecifiedSystem = "UNSPECIFIED_SYSTEM",
    Generic = "GENERIC",
    Buganizer = "BUGANIZER",
    Salesforce = "SALESFORCE",
    CloudSql = "CLOUD_SQL",
    Plx = "PLX",
    Sheets = "SHEETS",
    GoogleGroups = "GOOGLE_GROUPS",
    Email = "EMAIL",
    Spanner = "SPANNER",
    DataBridge = "DATA_BRIDGE"
}
/**
 * TaskMetadata are attributes that are associated to every common Task we have. Next available: 26
**/
export declare class EnterpriseCrmEventbusProtoTaskMetadata extends SpeakeasyBase {
    activeTaskName?: string;
    admins?: EnterpriseCrmEventbusProtoTaskMetadataAdmin[];
    category?: EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;
    codeSearchLink?: string;
    defaultJsonValidationOption?: EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;
    defaultSpec?: string;
    description?: string;
    descriptiveName?: string;
    docMarkdown?: string;
    externalCategory?: EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;
    externalCategorySequence?: number;
    externalDocHtml?: string;
    externalDocLink?: string;
    externalDocMarkdown?: string;
    g3DocLink?: string;
    iconLink?: string;
    isDeprecated?: boolean;
    name?: string;
    standaloneExternalDocHtml?: string;
    status?: EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;
    system?: EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;
    tags?: string[];
}
