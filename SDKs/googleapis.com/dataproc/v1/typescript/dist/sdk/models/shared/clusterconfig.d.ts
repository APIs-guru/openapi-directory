import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * The cluster config.
**/
export declare class ClusterConfig extends SpeakeasyBase {
    autoscalingConfig?: AutoscalingConfig;
    configBucket?: string;
    dataprocMetricConfig?: DataprocMetricConfig;
    encryptionConfig?: EncryptionConfig;
    endpointConfig?: EndpointConfig;
    gceClusterConfig?: GceClusterConfig;
    gkeClusterConfig?: GkeClusterConfig;
    initializationActions?: NodeInitializationAction[];
    lifecycleConfig?: LifecycleConfig;
    masterConfig?: InstanceGroupConfig;
    metastoreConfig?: MetastoreConfig;
    secondaryWorkerConfig?: InstanceGroupConfig;
    securityConfig?: SecurityConfig;
    softwareConfig?: SoftwareConfig;
    tempBucket?: string;
    workerConfig?: InstanceGroupConfig;
}
/**
 * The cluster config.
**/
export declare class ClusterConfigInput extends SpeakeasyBase {
    autoscalingConfig?: AutoscalingConfig;
    configBucket?: string;
    dataprocMetricConfig?: DataprocMetricConfig;
    encryptionConfig?: EncryptionConfig;
    endpointConfig?: EndpointConfigInput;
    gceClusterConfig?: GceClusterConfig;
    gkeClusterConfig?: GkeClusterConfig;
    initializationActions?: NodeInitializationAction[];
    lifecycleConfig?: LifecycleConfigInput;
    masterConfig?: InstanceGroupConfigInput;
    metastoreConfig?: MetastoreConfig;
    secondaryWorkerConfig?: InstanceGroupConfigInput;
    securityConfig?: SecurityConfig;
    softwareConfig?: SoftwareConfig;
    tempBucket?: string;
    workerConfig?: InstanceGroupConfigInput;
}
