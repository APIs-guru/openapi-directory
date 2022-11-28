import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskMetadataAdmin } from "./enterprisecrmeventbusprototaskmetadataadmin";


export enum EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum {
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

export enum EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum {
    UnspecifiedExternalCategory = "UNSPECIFIED_EXTERNAL_CATEGORY",
    Core = "CORE",
    Connectors = "CONNECTORS"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataStatusEnum {
    UnspecifiedStatus = "UNSPECIFIED_STATUS",
    DefaultInactive = "DEFAULT_INACTIVE",
    Active = "ACTIVE"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataSystemEnum {
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


// EnterpriseCrmEventbusProtoTaskMetadata
/** 
 * TaskMetadata are attributes that are associated to every common Task we have. Next available: 26
**/
export class EnterpriseCrmEventbusProtoTaskMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeTaskName" })
  activeTaskName?: string;

  @SpeakeasyMetadata({ data: "json, name=admins", elemType: EnterpriseCrmEventbusProtoTaskMetadataAdmin })
  admins?: EnterpriseCrmEventbusProtoTaskMetadataAdmin[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=codeSearchLink" })
  codeSearchLink?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultJsonValidationOption" })
  defaultJsonValidationOption?: EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultSpec" })
  defaultSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptiveName" })
  descriptiveName?: string;

  @SpeakeasyMetadata({ data: "json, name=docMarkdown" })
  docMarkdown?: string;

  @SpeakeasyMetadata({ data: "json, name=externalCategory" })
  externalCategory?: EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=externalCategorySequence" })
  externalCategorySequence?: number;

  @SpeakeasyMetadata({ data: "json, name=externalDocHtml" })
  externalDocHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDocLink" })
  externalDocLink?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDocMarkdown" })
  externalDocMarkdown?: string;

  @SpeakeasyMetadata({ data: "json, name=g3DocLink" })
  g3DocLink?: string;

  @SpeakeasyMetadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @SpeakeasyMetadata({ data: "json, name=isDeprecated" })
  isDeprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=standaloneExternalDocHtml" })
  standaloneExternalDocHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
