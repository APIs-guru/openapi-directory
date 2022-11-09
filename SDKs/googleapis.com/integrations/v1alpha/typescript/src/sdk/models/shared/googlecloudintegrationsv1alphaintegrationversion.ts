import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaIntegrationParameter } from "./googlecloudintegrationsv1alphaintegrationparameter";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { GoogleCloudIntegrationsV1alphaTaskConfig } from "./googlecloudintegrationsv1alphataskconfig";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { GoogleCloudIntegrationsV1alphaTriggerConfig } from "./googlecloudintegrationsv1alphatriggerconfig";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum {
    DatabasePersistencePolicyUnspecified = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED"
,    DatabasePersistenceDisabled = "DATABASE_PERSISTENCE_DISABLED"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum {
    Unspecified = "UNSPECIFIED"
,    Ui = "UI"
,    PiperV2 = "PIPER_V2"
,    PiperV3 = "PIPER_V3"
,    ApplicationIpProvisioning = "APPLICATION_IP_PROVISIONING"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum {
    IntegrationStateUnspecified = "INTEGRATION_STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
,    Snapshot = "SNAPSHOT"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum {
    Unknown = "UNKNOWN"
,    Draft = "DRAFT"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
,    Snapshot = "SNAPSHOT"
}


// GoogleCloudIntegrationsV1alphaIntegrationVersion
/** 
 * The integration version definition.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=databasePersistencePolicy" })
  databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=integrationParameters", elemType: shared.GoogleCloudIntegrationsV1alphaIntegrationParameter })
  integrationParameters?: GoogleCloudIntegrationsV1alphaIntegrationParameter[];

  @Metadata({ data: "json, name=integrationParametersInternal" })
  integrationParametersInternal?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

  @Metadata({ data: "json, name=lastModifierEmail" })
  lastModifierEmail?: string;

  @Metadata({ data: "json, name=lockHolder" })
  lockHolder?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum;

  @Metadata({ data: "json, name=parentTemplateId" })
  parentTemplateId?: string;

  @Metadata({ data: "json, name=snapshotNumber" })
  snapshotNumber?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum;

  @Metadata({ data: "json, name=taskConfigs", elemType: shared.GoogleCloudIntegrationsV1alphaTaskConfig })
  taskConfigs?: GoogleCloudIntegrationsV1alphaTaskConfig[];

  @Metadata({ data: "json, name=taskConfigsInternal", elemType: shared.EnterpriseCrmFrontendsEventbusProtoTaskConfig })
  taskConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];

  @Metadata({ data: "json, name=teardown" })
  teardown?: EnterpriseCrmEventbusProtoTeardown;

  @Metadata({ data: "json, name=triggerConfigs", elemType: shared.GoogleCloudIntegrationsV1alphaTriggerConfig })
  triggerConfigs?: GoogleCloudIntegrationsV1alphaTriggerConfig[];

  @Metadata({ data: "json, name=triggerConfigsInternal", elemType: shared.EnterpriseCrmFrontendsEventbusProtoTriggerConfig })
  triggerConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userLabel" })
  userLabel?: string;
}
