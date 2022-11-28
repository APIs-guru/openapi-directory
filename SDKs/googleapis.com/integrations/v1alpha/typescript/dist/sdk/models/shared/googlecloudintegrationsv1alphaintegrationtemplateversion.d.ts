import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";
export declare enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum {
    DatabasePersistencePolicyUnspecified = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED",
    DatabasePersistenceDisabled = "DATABASE_PERSISTENCE_DISABLED"
}
export declare enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum {
    Unknown = "UNKNOWN",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Snapshot = "SNAPSHOT"
}
/**
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion extends SpeakeasyBase {
    createTime?: string;
    databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;
    description?: string;
    lastModifierEmail?: string;
    name?: string;
    parentIntegrationVersionId?: string;
    snapshotNumber?: string;
    status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;
    taskConfigs?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];
    teardown?: EnterpriseCrmEventbusProtoTeardown;
    templateParameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
    triggerConfigs?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];
    updateTime?: string;
    userLabel?: string;
}
/**
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput extends SpeakeasyBase {
    databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;
    description?: string;
    lastModifierEmail?: string;
    parentIntegrationVersionId?: string;
    status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;
    taskConfigs?: EnterpriseCrmFrontendsEventbusProtoTaskConfig[];
    teardown?: EnterpriseCrmEventbusProtoTeardown;
    templateParameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
    triggerConfigs?: EnterpriseCrmFrontendsEventbusProtoTriggerConfig[];
    userLabel?: string;
}
