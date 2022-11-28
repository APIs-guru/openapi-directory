import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunConfig } from "./cloudrunconfig";
import { ConfigConnectorConfig } from "./configconnectorconfig";
import { DnsCacheConfig } from "./dnscacheconfig";
import { GcePersistentDiskCsiDriverConfig } from "./gcepersistentdiskcsidriverconfig";
import { GcpFilestoreCsiDriverConfig } from "./gcpfilestorecsidriverconfig";
import { GkeBackupAgentConfig } from "./gkebackupagentconfig";
import { HorizontalPodAutoscaling } from "./horizontalpodautoscaling";
import { HttpLoadBalancing } from "./httploadbalancing";
import { IstioConfig } from "./istioconfig";
import { KalmConfig } from "./kalmconfig";
import { KubernetesDashboard } from "./kubernetesdashboard";
import { NetworkPolicyConfig } from "./networkpolicyconfig";
/**
 * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
**/
export declare class AddonsConfig extends SpeakeasyBase {
    cloudRunConfig?: CloudRunConfig;
    configConnectorConfig?: ConfigConnectorConfig;
    dnsCacheConfig?: DnsCacheConfig;
    gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;
    gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;
    gkeBackupAgentConfig?: GkeBackupAgentConfig;
    horizontalPodAutoscaling?: HorizontalPodAutoscaling;
    httpLoadBalancing?: HttpLoadBalancing;
    istioConfig?: IstioConfig;
    kalmConfig?: KalmConfig;
    kubernetesDashboard?: KubernetesDashboard;
    networkPolicyConfig?: NetworkPolicyConfig;
}
