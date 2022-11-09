import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseConfig } from "./databaseconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { NodeConfig } from "./nodeconfig";
import { PrivateEnvironmentConfig } from "./privateenvironmentconfig";
import { SoftwareConfig } from "./softwareconfig";
import { WebServerConfig } from "./webserverconfig";
import { WebServerNetworkAccessControl } from "./webservernetworkaccesscontrol";
import { WorkloadsConfig } from "./workloadsconfig";

export enum EnvironmentConfigEnvironmentSizeEnum {
    EnvironmentSizeUnspecified = "ENVIRONMENT_SIZE_UNSPECIFIED"
,    EnvironmentSizeSmall = "ENVIRONMENT_SIZE_SMALL"
,    EnvironmentSizeMedium = "ENVIRONMENT_SIZE_MEDIUM"
,    EnvironmentSizeLarge = "ENVIRONMENT_SIZE_LARGE"
}


// EnvironmentConfig
/** 
 * Configuration information for an environment.
**/
export class EnvironmentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=airflowUri" })
  airflowUri?: string;

  @Metadata({ data: "json, name=dagGcsPrefix" })
  dagGcsPrefix?: string;

  @Metadata({ data: "json, name=databaseConfig" })
  databaseConfig?: DatabaseConfig;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=environmentSize" })
  environmentSize?: EnvironmentConfigEnvironmentSizeEnum;

  @Metadata({ data: "json, name=gkeCluster" })
  gkeCluster?: string;

  @Metadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @Metadata({ data: "json, name=masterAuthorizedNetworksConfig" })
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @Metadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @Metadata({ data: "json, name=privateEnvironmentConfig" })
  privateEnvironmentConfig?: PrivateEnvironmentConfig;

  @Metadata({ data: "json, name=softwareConfig" })
  softwareConfig?: SoftwareConfig;

  @Metadata({ data: "json, name=webServerConfig" })
  webServerConfig?: WebServerConfig;

  @Metadata({ data: "json, name=webServerNetworkAccessControl" })
  webServerNetworkAccessControl?: WebServerNetworkAccessControl;

  @Metadata({ data: "json, name=workloadsConfig" })
  workloadsConfig?: WorkloadsConfig;
}
