import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRunConfig } from "./cloudrunconfig";
import { ConfigConnectorConfig } from "./configconnectorconfig";
import { DnsCacheConfig } from "./dnscacheconfig";
import { GcePersistentDiskCsiDriverConfig } from "./gcepersistentdiskcsidriverconfig";
import { GcpFilestoreCsiDriverConfig } from "./gcpfilestorecsidriverconfig";
import { GkeBackupAgentConfig } from "./gkebackupagentconfig";
import { HorizontalPodAutoscaling } from "./horizontalpodautoscaling";
import { HttpLoadBalancing } from "./httploadbalancing";
import { KubernetesDashboard } from "./kubernetesdashboard";
import { NetworkPolicyConfig } from "./networkpolicyconfig";


// AddonsConfig
/** 
 * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
**/
export class AddonsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudRunConfig" })
  cloudRunConfig?: CloudRunConfig;

  @Metadata({ data: "json, name=configConnectorConfig" })
  configConnectorConfig?: ConfigConnectorConfig;

  @Metadata({ data: "json, name=dnsCacheConfig" })
  dnsCacheConfig?: DnsCacheConfig;

  @Metadata({ data: "json, name=gcePersistentDiskCsiDriverConfig" })
  gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;

  @Metadata({ data: "json, name=gcpFilestoreCsiDriverConfig" })
  gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;

  @Metadata({ data: "json, name=gkeBackupAgentConfig" })
  gkeBackupAgentConfig?: GkeBackupAgentConfig;

  @Metadata({ data: "json, name=horizontalPodAutoscaling" })
  horizontalPodAutoscaling?: HorizontalPodAutoscaling;

  @Metadata({ data: "json, name=httpLoadBalancing" })
  httpLoadBalancing?: HttpLoadBalancing;

  @Metadata({ data: "json, name=kubernetesDashboard" })
  kubernetesDashboard?: KubernetesDashboard;

  @Metadata({ data: "json, name=networkPolicyConfig" })
  networkPolicyConfig?: NetworkPolicyConfig;
}
