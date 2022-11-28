import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseConfig } from "./databaseconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { NodeConfig } from "./nodeconfig";
import { PrivateEnvironmentConfigInput } from "./privateenvironmentconfig";
import { RecoveryConfig } from "./recoveryconfig";
import { SoftwareConfig } from "./softwareconfig";
import { WebServerConfig } from "./webserverconfig";
import { WebServerNetworkAccessControl } from "./webservernetworkaccesscontrol";
import { WorkloadsConfig } from "./workloadsconfig";
import { PrivateEnvironmentConfig } from "./privateenvironmentconfig";
export declare enum EnvironmentConfigEnvironmentSizeEnum {
    EnvironmentSizeUnspecified = "ENVIRONMENT_SIZE_UNSPECIFIED",
    EnvironmentSizeSmall = "ENVIRONMENT_SIZE_SMALL",
    EnvironmentSizeMedium = "ENVIRONMENT_SIZE_MEDIUM",
    EnvironmentSizeLarge = "ENVIRONMENT_SIZE_LARGE"
}
/**
 * Configuration information for an environment.
**/
export declare class EnvironmentConfigInput extends SpeakeasyBase {
    databaseConfig?: DatabaseConfig;
    encryptionConfig?: EncryptionConfig;
    environmentSize?: EnvironmentConfigEnvironmentSizeEnum;
    maintenanceWindow?: MaintenanceWindow;
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    nodeConfig?: NodeConfig;
    nodeCount?: number;
    privateEnvironmentConfig?: PrivateEnvironmentConfigInput;
    recoveryConfig?: RecoveryConfig;
    softwareConfig?: SoftwareConfig;
    webServerConfig?: WebServerConfig;
    webServerNetworkAccessControl?: WebServerNetworkAccessControl;
    workloadsConfig?: WorkloadsConfig;
}
/**
 * Configuration information for an environment.
**/
export declare class EnvironmentConfig extends SpeakeasyBase {
    airflowUri?: string;
    dagGcsPrefix?: string;
    databaseConfig?: DatabaseConfig;
    encryptionConfig?: EncryptionConfig;
    environmentSize?: EnvironmentConfigEnvironmentSizeEnum;
    gkeCluster?: string;
    maintenanceWindow?: MaintenanceWindow;
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    nodeConfig?: NodeConfig;
    nodeCount?: number;
    privateEnvironmentConfig?: PrivateEnvironmentConfig;
    recoveryConfig?: RecoveryConfig;
    softwareConfig?: SoftwareConfig;
    webServerConfig?: WebServerConfig;
    webServerNetworkAccessControl?: WebServerNetworkAccessControl;
    workloadsConfig?: WorkloadsConfig;
}
