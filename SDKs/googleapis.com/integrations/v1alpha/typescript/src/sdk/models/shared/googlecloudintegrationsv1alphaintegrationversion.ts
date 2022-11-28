import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationParameter } from "./googlecloudintegrationsv1alphaintegrationparameter";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { GoogleCloudIntegrationsV1alphaTaskConfig } from "./googlecloudintegrationsv1alphataskconfig";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { GoogleCloudIntegrationsV1alphaTriggerConfig } from "./googlecloudintegrationsv1alphatriggerconfig";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";


export enum GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum {
    DatabasePersistencePolicyUnspecified = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED",
    DatabasePersistenceDisabled = "DATABASE_PERSISTENCE_DISABLED"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum {
    Unspecified = "UNSPECIFIED",
    Ui = "UI",
    PiperV2 = "PIPER_V2",
    PiperV3 = "PIPER_V3",
    ApplicationIpProvisioning = "APPLICATION_IP_PROVISIONING"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum {
    IntegrationStateUnspecified = "INTEGRATION_STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Snapshot = "SNAPSHOT"
}

export enum GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum {
    Unknown = "UNKNOWN",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Snapshot = "SNAPSHOT"
}


// GoogleCloudIntegrationsV1alphaIntegrationVersion
/** 
 * The integration version definition.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=databasePersistencePolicy" })
  databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationParameters", elemType: GoogleCloudIntegrationsV1alphaIntegrationParameter })
  integrationParameters?: GoogleCloudIntegrationsV1alphaIntegrationParameter[];

  @SpeakeasyMetadata({ data: "json, name=integrationParametersInternal" })
  integrationParametersInternal?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

  @SpeakeasyMetadata({ data: "json, name=lastModifierEmail" })
  lastModifierEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=lockHolder" })
  lockHolder?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum;

  @SpeakeasyMetadata({ data: "json, name=parentTemplateId" })
  parentTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotNumber" })
  snapshotNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskConfigs", elemType: GoogleCloudIntegrationsV1alphaTaskConfig })
  taskConfigs?: GoogleCloudIntegrationsV1alphaTaskConfig[];

  @SpeakeasyMetadata({ data: "json, name=taskConfigsInternal", elemType: EnterpriseCrmFrontendsEventbusProtoTaskConfig })
  taskConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];

  @SpeakeasyMetadata({ data: "json, name=teardown" })
  teardown?: EnterpriseCrmEventbusProtoTeardown;

  @SpeakeasyMetadata({ data: "json, name=triggerConfigs", elemType: GoogleCloudIntegrationsV1alphaTriggerConfig })
  triggerConfigs?: GoogleCloudIntegrationsV1alphaTriggerConfig[];

  @SpeakeasyMetadata({ data: "json, name=triggerConfigsInternal", elemType: EnterpriseCrmFrontendsEventbusProtoTriggerConfig })
  triggerConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabel" })
  userLabel?: string;
}
