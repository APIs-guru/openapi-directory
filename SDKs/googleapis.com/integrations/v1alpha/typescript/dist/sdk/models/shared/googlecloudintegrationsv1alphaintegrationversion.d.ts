import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationParameter } from "./googlecloudintegrationsv1alphaintegrationparameter";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { GoogleCloudIntegrationsV1alphaTaskConfig } from "./googlecloudintegrationsv1alphataskconfig";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { GoogleCloudIntegrationsV1alphaTriggerConfig } from "./googlecloudintegrationsv1alphatriggerconfig";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";
export declare enum GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum {
    DatabasePersistencePolicyUnspecified = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED",
    DatabasePersistenceDisabled = "DATABASE_PERSISTENCE_DISABLED"
}
export declare enum GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum {
    Unspecified = "UNSPECIFIED",
    Ui = "UI",
    PiperV2 = "PIPER_V2",
    PiperV3 = "PIPER_V3",
    ApplicationIpProvisioning = "APPLICATION_IP_PROVISIONING"
}
export declare enum GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum {
    IntegrationStateUnspecified = "INTEGRATION_STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Snapshot = "SNAPSHOT"
}
export declare enum GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum {
    Unknown = "UNKNOWN",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Snapshot = "SNAPSHOT"
}
/**
 * The integration version definition.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationVersion extends SpeakeasyBase {
    createTime?: string;
    databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum;
    description?: string;
    integrationParameters?: GoogleCloudIntegrationsV1alphaIntegrationParameter[];
    integrationParametersInternal?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
    lastModifierEmail?: string;
    lockHolder?: string;
    name?: string;
    origin?: GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum;
    parentTemplateId?: string;
    snapshotNumber?: string;
    state?: GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum;
    status?: GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum;
    taskConfigs?: GoogleCloudIntegrationsV1alphaTaskConfig[];
    taskConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];
    teardown?: EnterpriseCrmEventbusProtoTeardown;
    triggerConfigs?: GoogleCloudIntegrationsV1alphaTriggerConfig[];
    triggerConfigsInternal?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];
    updateTime?: string;
    userLabel?: string;
}
