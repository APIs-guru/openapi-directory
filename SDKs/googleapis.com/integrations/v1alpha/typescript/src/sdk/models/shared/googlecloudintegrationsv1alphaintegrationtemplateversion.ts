import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";

export enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum {
    DatabasePersistencePolicyUnspecified = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED"
,    DatabasePersistenceDisabled = "DATABASE_PERSISTENCE_DISABLED"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum {
    Unknown = "UNKNOWN"
,    Draft = "DRAFT"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
,    Snapshot = "SNAPSHOT"
}


// GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion
/** 
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=databasePersistencePolicy" })
  databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastModifierEmail" })
  lastModifierEmail?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentIntegrationVersionId" })
  parentIntegrationVersionId?: string;

  @Metadata({ data: "json, name=snapshotNumber" })
  snapshotNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;

  @Metadata({ data: "json, name=taskConfigs", elemType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig })
  taskConfigs?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];

  @Metadata({ data: "json, name=teardown" })
  teardown?: EnterpriseCrmEventbusProtoTeardown;

  @Metadata({ data: "json, name=templateParameters" })
  templateParameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

  @Metadata({ data: "json, name=triggerConfigs", elemType: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig })
  triggerConfigs?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userLabel" })
  userLabel?: string;
}
