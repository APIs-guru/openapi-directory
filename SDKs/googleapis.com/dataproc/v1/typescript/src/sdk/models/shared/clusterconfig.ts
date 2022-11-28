import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { SecurityConfig } from "./securityconfig";
import { SoftwareConfig } from "./softwareconfig";
import { EndpointConfigInput } from "./endpointconfig";
import { LifecycleConfigInput } from "./lifecycleconfig";
import { InstanceGroupConfigInput } from "./instancegroupconfig";



// ClusterConfig
/** 
 * The cluster config.
**/
export class ClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscalingConfig" })
  autoscalingConfig?: AutoscalingConfig;

  @SpeakeasyMetadata({ data: "json, name=configBucket" })
  configBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=dataprocMetricConfig" })
  dataprocMetricConfig?: DataprocMetricConfig;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=endpointConfig" })
  endpointConfig?: EndpointConfig;

  @SpeakeasyMetadata({ data: "json, name=gceClusterConfig" })
  gceClusterConfig?: GceClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=gkeClusterConfig" })
  gkeClusterConfig?: GkeClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=initializationActions", elemType: NodeInitializationAction })
  initializationActions?: NodeInitializationAction[];

  @SpeakeasyMetadata({ data: "json, name=lifecycleConfig" })
  lifecycleConfig?: LifecycleConfig;

  @SpeakeasyMetadata({ data: "json, name=masterConfig" })
  masterConfig?: InstanceGroupConfig;

  @SpeakeasyMetadata({ data: "json, name=metastoreConfig" })
  metastoreConfig?: MetastoreConfig;

  @SpeakeasyMetadata({ data: "json, name=secondaryWorkerConfig" })
  secondaryWorkerConfig?: InstanceGroupConfig;

  @SpeakeasyMetadata({ data: "json, name=securityConfig" })
  securityConfig?: SecurityConfig;

  @SpeakeasyMetadata({ data: "json, name=softwareConfig" })
  softwareConfig?: SoftwareConfig;

  @SpeakeasyMetadata({ data: "json, name=tempBucket" })
  tempBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: InstanceGroupConfig;
}


// ClusterConfigInput
/** 
 * The cluster config.
**/
export class ClusterConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscalingConfig" })
  autoscalingConfig?: AutoscalingConfig;

  @SpeakeasyMetadata({ data: "json, name=configBucket" })
  configBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=dataprocMetricConfig" })
  dataprocMetricConfig?: DataprocMetricConfig;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=endpointConfig" })
  endpointConfig?: EndpointConfigInput;

  @SpeakeasyMetadata({ data: "json, name=gceClusterConfig" })
  gceClusterConfig?: GceClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=gkeClusterConfig" })
  gkeClusterConfig?: GkeClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=initializationActions", elemType: NodeInitializationAction })
  initializationActions?: NodeInitializationAction[];

  @SpeakeasyMetadata({ data: "json, name=lifecycleConfig" })
  lifecycleConfig?: LifecycleConfigInput;

  @SpeakeasyMetadata({ data: "json, name=masterConfig" })
  masterConfig?: InstanceGroupConfigInput;

  @SpeakeasyMetadata({ data: "json, name=metastoreConfig" })
  metastoreConfig?: MetastoreConfig;

  @SpeakeasyMetadata({ data: "json, name=secondaryWorkerConfig" })
  secondaryWorkerConfig?: InstanceGroupConfigInput;

  @SpeakeasyMetadata({ data: "json, name=securityConfig" })
  securityConfig?: SecurityConfig;

  @SpeakeasyMetadata({ data: "json, name=softwareConfig" })
  softwareConfig?: SoftwareConfig;

  @SpeakeasyMetadata({ data: "json, name=tempBucket" })
  tempBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: InstanceGroupConfigInput;
}
