import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoTaskMetadataAdmin } from "./enterprisecrmeventbusprototaskmetadataadmin";

export enum EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum {
    UnspecifiedCategory = "UNSPECIFIED_CATEGORY"
,    Custom = "CUSTOM"
,    FlowControl = "FLOW_CONTROL"
,    DataManipulation = "DATA_MANIPULATION"
,    Scripting = "SCRIPTING"
,    Connector = "CONNECTOR"
,    Hidden = "HIDDEN"
,    CloudSystems = "CLOUD_SYSTEMS"
,    CustomTaskTemplate = "CUSTOM_TASK_TEMPLATE"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION"
,    Skip = "SKIP"
,    PreExecution = "PRE_EXECUTION"
,    PostExecution = "POST_EXECUTION"
,    PrePostExecution = "PRE_POST_EXECUTION"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum {
    UnspecifiedExternalCategory = "UNSPECIFIED_EXTERNAL_CATEGORY"
,    Core = "CORE"
,    Connectors = "CONNECTORS"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataStatusEnum {
    UnspecifiedStatus = "UNSPECIFIED_STATUS"
,    DefaultInactive = "DEFAULT_INACTIVE"
,    Active = "ACTIVE"
}

export enum EnterpriseCrmEventbusProtoTaskMetadataSystemEnum {
    UnspecifiedSystem = "UNSPECIFIED_SYSTEM"
,    Generic = "GENERIC"
,    Buganizer = "BUGANIZER"
,    Salesforce = "SALESFORCE"
,    CloudSql = "CLOUD_SQL"
,    Plx = "PLX"
,    Sheets = "SHEETS"
,    GoogleGroups = "GOOGLE_GROUPS"
,    Email = "EMAIL"
,    Spanner = "SPANNER"
,    DataBridge = "DATA_BRIDGE"
}


// EnterpriseCrmEventbusProtoTaskMetadata
/** 
 * TaskMetadata are attributes that are associated to every common Task we have. Next available: 26
**/
export class EnterpriseCrmEventbusProtoTaskMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeTaskName" })
  activeTaskName?: string;

  @Metadata({ data: "json, name=admins", elemType: shared.EnterpriseCrmEventbusProtoTaskMetadataAdmin })
  admins?: EnterpriseCrmEventbusProtoTaskMetadataAdmin[];

  @Metadata({ data: "json, name=category" })
  category?: EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;

  @Metadata({ data: "json, name=codeSearchLink" })
  codeSearchLink?: string;

  @Metadata({ data: "json, name=defaultJsonValidationOption" })
  defaultJsonValidationOption?: EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;

  @Metadata({ data: "json, name=defaultSpec" })
  defaultSpec?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptiveName" })
  descriptiveName?: string;

  @Metadata({ data: "json, name=docMarkdown" })
  docMarkdown?: string;

  @Metadata({ data: "json, name=externalCategory" })
  externalCategory?: EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;

  @Metadata({ data: "json, name=externalCategorySequence" })
  externalCategorySequence?: number;

  @Metadata({ data: "json, name=externalDocHtml" })
  externalDocHtml?: string;

  @Metadata({ data: "json, name=externalDocLink" })
  externalDocLink?: string;

  @Metadata({ data: "json, name=externalDocMarkdown" })
  externalDocMarkdown?: string;

  @Metadata({ data: "json, name=g3DocLink" })
  g3DocLink?: string;

  @Metadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @Metadata({ data: "json, name=isDeprecated" })
  isDeprecated?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=standaloneExternalDocHtml" })
  standaloneExternalDocHtml?: string;

  @Metadata({ data: "json, name=status" })
  status?: EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;

  @Metadata({ data: "json, name=system" })
  system?: EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
