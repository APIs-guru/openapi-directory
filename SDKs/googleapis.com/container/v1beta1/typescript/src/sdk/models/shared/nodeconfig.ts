import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AdvancedMachineFeatures } from "./advancedmachinefeatures";
import { ConfidentialNodes } from "./confidentialnodes";
import { EphemeralStorageConfig } from "./ephemeralstorageconfig";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { VirtualNic } from "./virtualnic";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { ReservationAffinity } from "./reservationaffinity";
import { SandboxConfig } from "./sandboxconfig";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { NodeTaint } from "./nodetaint";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";



// NodeConfig
/** 
 * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
**/
export class NodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: AcceleratorConfig })
  accelerators?: AcceleratorConfig[];

  @SpeakeasyMetadata({ data: "json, name=advancedMachineFeatures" })
  advancedMachineFeatures?: AdvancedMachineFeatures;

  @SpeakeasyMetadata({ data: "json, name=bootDiskKmsKey" })
  bootDiskKmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=ephemeralStorageConfig" })
  ephemeralStorageConfig?: EphemeralStorageConfig;

  @SpeakeasyMetadata({ data: "json, name=fastSocket" })
  fastSocket?: FastSocket;

  @SpeakeasyMetadata({ data: "json, name=gcfsConfig" })
  gcfsConfig?: GcfsConfig;

  @SpeakeasyMetadata({ data: "json, name=gvnic" })
  gvnic?: VirtualNic;

  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: string;

  @SpeakeasyMetadata({ data: "json, name=kubeletConfig" })
  kubeletConfig?: NodeKubeletConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linuxNodeConfig" })
  linuxNodeConfig?: LinuxNodeConfig;

  @SpeakeasyMetadata({ data: "json, name=localSsdCount" })
  localSsdCount?: number;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: NodePoolLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeGroup" })
  nodeGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @SpeakeasyMetadata({ data: "json, name=resourceLabels" })
  resourceLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sandboxConfig" })
  sandboxConfig?: SandboxConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=spot" })
  spot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=taints", elemType: NodeTaint })
  taints?: NodeTaint[];

  @SpeakeasyMetadata({ data: "json, name=workloadMetadataConfig" })
  workloadMetadataConfig?: WorkloadMetadataConfig;
}
