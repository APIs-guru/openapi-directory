import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// AddonsConfig
/** 
 * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
**/
export class AddonsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudRunConfig" })
  cloudRunConfig?: CloudRunConfig;

  @SpeakeasyMetadata({ data: "json, name=configConnectorConfig" })
  configConnectorConfig?: ConfigConnectorConfig;

  @SpeakeasyMetadata({ data: "json, name=dnsCacheConfig" })
  dnsCacheConfig?: DnsCacheConfig;

  @SpeakeasyMetadata({ data: "json, name=gcePersistentDiskCsiDriverConfig" })
  gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;

  @SpeakeasyMetadata({ data: "json, name=gcpFilestoreCsiDriverConfig" })
  gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;

  @SpeakeasyMetadata({ data: "json, name=gkeBackupAgentConfig" })
  gkeBackupAgentConfig?: GkeBackupAgentConfig;

  @SpeakeasyMetadata({ data: "json, name=horizontalPodAutoscaling" })
  horizontalPodAutoscaling?: HorizontalPodAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=httpLoadBalancing" })
  httpLoadBalancing?: HttpLoadBalancing;

  @SpeakeasyMetadata({ data: "json, name=istioConfig" })
  istioConfig?: IstioConfig;

  @SpeakeasyMetadata({ data: "json, name=kalmConfig" })
  kalmConfig?: KalmConfig;

  @SpeakeasyMetadata({ data: "json, name=kubernetesDashboard" })
  kubernetesDashboard?: KubernetesDashboard;

  @SpeakeasyMetadata({ data: "json, name=networkPolicyConfig" })
  networkPolicyConfig?: NetworkPolicyConfig;
}
