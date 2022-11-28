import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum EnvironmentConfigEnvironmentSizeEnum {
    EnvironmentSizeUnspecified = "ENVIRONMENT_SIZE_UNSPECIFIED",
    EnvironmentSizeSmall = "ENVIRONMENT_SIZE_SMALL",
    EnvironmentSizeMedium = "ENVIRONMENT_SIZE_MEDIUM",
    EnvironmentSizeLarge = "ENVIRONMENT_SIZE_LARGE"
}


// EnvironmentConfigInput
/** 
 * Configuration information for an environment.
**/
export class EnvironmentConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseConfig" })
  databaseConfig?: DatabaseConfig;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=environmentSize" })
  environmentSize?: EnvironmentConfigEnvironmentSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" })
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=privateEnvironmentConfig" })
  privateEnvironmentConfig?: PrivateEnvironmentConfigInput;

  @SpeakeasyMetadata({ data: "json, name=recoveryConfig" })
  recoveryConfig?: RecoveryConfig;

  @SpeakeasyMetadata({ data: "json, name=softwareConfig" })
  softwareConfig?: SoftwareConfig;

  @SpeakeasyMetadata({ data: "json, name=webServerConfig" })
  webServerConfig?: WebServerConfig;

  @SpeakeasyMetadata({ data: "json, name=webServerNetworkAccessControl" })
  webServerNetworkAccessControl?: WebServerNetworkAccessControl;

  @SpeakeasyMetadata({ data: "json, name=workloadsConfig" })
  workloadsConfig?: WorkloadsConfig;
}


// EnvironmentConfig
/** 
 * Configuration information for an environment.
**/
export class EnvironmentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airflowUri" })
  airflowUri?: string;

  @SpeakeasyMetadata({ data: "json, name=dagGcsPrefix" })
  dagGcsPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseConfig" })
  databaseConfig?: DatabaseConfig;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=environmentSize" })
  environmentSize?: EnvironmentConfigEnvironmentSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=gkeCluster" })
  gkeCluster?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" })
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=privateEnvironmentConfig" })
  privateEnvironmentConfig?: PrivateEnvironmentConfig;

  @SpeakeasyMetadata({ data: "json, name=recoveryConfig" })
  recoveryConfig?: RecoveryConfig;

  @SpeakeasyMetadata({ data: "json, name=softwareConfig" })
  softwareConfig?: SoftwareConfig;

  @SpeakeasyMetadata({ data: "json, name=webServerConfig" })
  webServerConfig?: WebServerConfig;

  @SpeakeasyMetadata({ data: "json, name=webServerNetworkAccessControl" })
  webServerNetworkAccessControl?: WebServerNetworkAccessControl;

  @SpeakeasyMetadata({ data: "json, name=workloadsConfig" })
  workloadsConfig?: WorkloadsConfig;
}
