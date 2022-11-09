import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoscalingConfig } from "./autoscalingconfig";
import { DataprocMetricConfig } from "./dataprocmetricconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { EndpointConfig } from "./endpointconfig";
import { GceClusterConfig } from "./gceclusterconfig";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { NodeInitializationAction } from "./nodeinitializationaction";
import { LifecycleConfig } from "./lifecycleconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { MetastoreConfig } from "./metastoreconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { SecurityConfig } from "./securityconfig";
import { SoftwareConfig } from "./softwareconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";


// ClusterConfig
/** 
 * The cluster config.
**/
export class ClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscalingConfig" })
  autoscalingConfig?: AutoscalingConfig;

  @Metadata({ data: "json, name=configBucket" })
  configBucket?: string;

  @Metadata({ data: "json, name=dataprocMetricConfig" })
  dataprocMetricConfig?: DataprocMetricConfig;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=endpointConfig" })
  endpointConfig?: EndpointConfig;

  @Metadata({ data: "json, name=gceClusterConfig" })
  gceClusterConfig?: GceClusterConfig;

  @Metadata({ data: "json, name=gkeClusterConfig" })
  gkeClusterConfig?: GkeClusterConfig;

  @Metadata({ data: "json, name=initializationActions", elemType: shared.NodeInitializationAction })
  initializationActions?: NodeInitializationAction[];

  @Metadata({ data: "json, name=lifecycleConfig" })
  lifecycleConfig?: LifecycleConfig;

  @Metadata({ data: "json, name=masterConfig" })
  masterConfig?: InstanceGroupConfig;

  @Metadata({ data: "json, name=metastoreConfig" })
  metastoreConfig?: MetastoreConfig;

  @Metadata({ data: "json, name=secondaryWorkerConfig" })
  secondaryWorkerConfig?: InstanceGroupConfig;

  @Metadata({ data: "json, name=securityConfig" })
  securityConfig?: SecurityConfig;

  @Metadata({ data: "json, name=softwareConfig" })
  softwareConfig?: SoftwareConfig;

  @Metadata({ data: "json, name=tempBucket" })
  tempBucket?: string;

  @Metadata({ data: "json, name=workerConfig" })
  workerConfig?: InstanceGroupConfig;
}
