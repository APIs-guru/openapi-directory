import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";


export enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum {
    DatabasePersistencePolicyUnspecified = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED",
    DatabasePersistenceDisabled = "DATABASE_PERSISTENCE_DISABLED"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum {
    Unknown = "UNKNOWN",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Snapshot = "SNAPSHOT"
}


// GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion
/** 
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=databasePersistencePolicy" })
  databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifierEmail" })
  lastModifierEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentIntegrationVersionId" })
  parentIntegrationVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotNumber" })
  snapshotNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTaskConfig })
  taskConfigs?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];

  @SpeakeasyMetadata({ data: "json, name=teardown" })
  teardown?: EnterpriseCrmEventbusProtoTeardown;

  @SpeakeasyMetadata({ data: "json, name=templateParameters" })
  templateParameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

  @SpeakeasyMetadata({ data: "json, name=triggerConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTriggerConfig })
  triggerConfigs?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabel" })
  userLabel?: string;
}


// GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput
/** 
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databasePersistencePolicy" })
  databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifierEmail" })
  lastModifierEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=parentIntegrationVersionId" })
  parentIntegrationVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTaskConfig })
  taskConfigs?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];

  @SpeakeasyMetadata({ data: "json, name=teardown" })
  teardown?: EnterpriseCrmEventbusProtoTeardown;

  @SpeakeasyMetadata({ data: "json, name=templateParameters" })
  templateParameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

  @SpeakeasyMetadata({ data: "json, name=triggerConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTriggerConfig })
  triggerConfigs?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];

  @SpeakeasyMetadata({ data: "json, name=userLabel" })
  userLabel?: string;
}
